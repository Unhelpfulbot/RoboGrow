from datetime import datetime;
camera zed;
sensorsData sensor_data;
sensor light;
sensor light2;
sensor light3;
sensor gyro;

int timenow;

while(zed.grab() == Sucess){
   timenow = zed.getSensorData(sensor_data, TIME_REFERENCE::Current);
}
if(time.deltatime)
sensor_data.getSensorData()