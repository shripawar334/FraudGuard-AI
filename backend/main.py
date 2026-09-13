from pathlib import Path

import joblib
import pandas as pd
from fastapi import FastAPI

from schemas.prediction import TransactionInput

from fastapi.middleware.cors import CORSMiddleware


# --------------------------------------------------
# FastAPI Application
# --------------------------------------------------

app = FastAPI(
    title="Fraud Detection API",
    description="API for AI-powered transaction fraud detection",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --------------------------------------------------
# Model Paths
# --------------------------------------------------

BASE_DIR = Path(__file__).resolve().parent

MODEL_PATH = BASE_DIR / "models" / "fraud_detection_model.pkl"
PREPROCESSOR_PATH = BASE_DIR / "models" / "fraud_detection_preprocessor.pkl"


# --------------------------------------------------
# Load ML Model and Preprocessor
# --------------------------------------------------

fraud_model = joblib.load(MODEL_PATH)
preprocessor = joblib.load(PREPROCESSOR_PATH)

FINAL_THRESHOLD = 0.30


# --------------------------------------------------
# Feature Order
# --------------------------------------------------

FEATURE_COLUMNS = [
    "customer_age",
    "account_age_days",
    "customer_gender",
    "customer_income",
    "account_balance",
    "transaction_amount",
    "transaction_hour",
    "transaction_day",
    "transaction_type",
    "merchant_category",
    "payment_method",
    "transaction_location",
    "is_international_transaction",
    "device_type",
    "device_trust_score",
    "distance_from_home_km",
    "transactions_last_24h",
    "transactions_last_7d",
    "avg_transaction_amount",
    "previous_transaction_amount",
    "time_since_last_transaction_min",
    "failed_transaction_count_24h",
    "new_device_used",
    "location_mismatch",
    "unusual_transaction_time"
]


# --------------------------------------------------
# Root Endpoint
# --------------------------------------------------

@app.get("/")
def root():
    return {
        "message": "Fraud Detection API is running successfully!"
    }


# --------------------------------------------------
# Health Check Endpoint
# --------------------------------------------------

@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }


# --------------------------------------------------
# ML Model Status Endpoint
# --------------------------------------------------

@app.get("/model-status")
def model_status():
    return {
        "model": "Random Forest",
        "model_loaded": True,
        "preprocessor_loaded": True,
        "threshold": FINAL_THRESHOLD
    }


# --------------------------------------------------
# Prediction Endpoint
# --------------------------------------------------

@app.post("/predict")
def predict_transaction(transaction: TransactionInput):

    # Convert request data into dictionary
    transaction_data = transaction.model_dump()

    # Create DataFrame with exact feature order
    input_data = pd.DataFrame(
        [transaction_data],
        columns=FEATURE_COLUMNS
    )

    # Apply the same preprocessing used during training
    processed_data = preprocessor.transform(input_data)

    # Get fraud probability
    fraud_probability = fraud_model.predict_proba(processed_data)[0][1]

    # Apply final threshold
    prediction = int(fraud_probability >= FINAL_THRESHOLD)

    # Determine result
    if prediction == 1:
        result = "Fraud"
    else:
        result = "Legitimate"

    # Determine risk level
    if fraud_probability >= 0.70:
        risk_level = "High"
    elif fraud_probability >= FINAL_THRESHOLD:
        risk_level = "Medium"
    else:
        risk_level = "Low"

    return {
        "prediction": result,
        "fraud_probability": round(float(fraud_probability), 4),
        "fraud_probability_percent": round(float(fraud_probability * 100), 2),
        "risk_level": risk_level,
        "threshold": FINAL_THRESHOLD
    }