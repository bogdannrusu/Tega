from sqlalchemy import create_engine

# Replace with your actual database credentials
username = 'root'
password = 'Ban4ever!#'
host = 'localhost'  # e.g., 'localhost'
database = 'brs_autoschool'

# Create an engine
engine = create_engine(f'mysql+pymysql://{username}:{password}@{host}/{database}')
