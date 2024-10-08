from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/getdata', methods=['GET'])
def get_data():
    data = {}
    action = request.args.get('page')
    if action == "Dashboard":
        with open("data.csv", mode='r', encoding='utf-8') as file:
            raw_data = file.readlines()
            for x in raw_data:
                strip_data = x.strip()
                split_data = strip_data.split(',')
                print(split_data)
                data["Batterylevel"] = split_data[0]
                data["Batterydestroy"]= split_data[1]
                data["Trashlevel"]= int(int(split_data[2])*100/25)
                data["Status"]= split_data[4]
                data["Wifi"]= split_data[3]
        print(data)
    elif action == "Setting":
        with open("WebAppBin\Setting.csv", mode='r', encoding='utf-8') as file:
            raw_data = file.readlines()
            for x in raw_data:
                strip_data = x.strip()
                split_data = strip_data.split(',')
                data["name"] = split_data[0]
                data["gohome"] = int(split_data[1])
                data["stopdistance"] = int(split_data[2])
        print(data)
    else:
         return jsonify({"message": "No valid page specified"}), 400
    # data = {"message": "Hello from Flask!"}
    return jsonify(data)

@app.route('/api/update', methods=['POST'])
def get_update():
    data = request.json  
    print(data["name"])
    with open("Setting.csv", mode='w',encoding='utf-8') as file:
        file.write(data["name"]+","+str(data["gohome"])+","+str(data["stopdistance"]))

    return jsonify({'message': 'CSV updated successfully!'})
    


if __name__ == '__main__':
    app.run(debug=True,host="0.0.0.0",port=5000)
