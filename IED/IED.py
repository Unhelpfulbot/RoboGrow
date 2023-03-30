from datetime import datetime;
from pytz import timezone;

# Establishing the time
timezone_areas = ['word', 'New York']
timezone_areas_upper = timezone_areas.upper()
print("Put your location")
location = input()
location_upper = location.upper()
if(timezone_areas.includes(location)):
    print(f'{location} is in the data')

timezones = pytz.timezone(location)
timenow = datetime.now(tz = timezones)

