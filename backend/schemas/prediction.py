from pydantic import BaseModel


class TransactionInput(BaseModel):
    customer_age: int
    account_age_days: int
    customer_gender: str
    customer_income: float
    account_balance: float
    transaction_amount: float
    transaction_hour: int
    transaction_day: str
    transaction_type: str
    merchant_category: str
    payment_method: str
    transaction_location: str
    is_international_transaction: str
    device_type: str
    device_trust_score: float
    distance_from_home_km: float
    transactions_last_24h: int
    transactions_last_7d: int
    avg_transaction_amount: float
    previous_transaction_amount: float
    time_since_last_transaction_min: int
    failed_transaction_count_24h: int
    new_device_used: str
    location_mismatch: str
    unusual_transaction_time: str