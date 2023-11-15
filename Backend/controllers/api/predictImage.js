const { PythonShell } = require("python-shell");

async function predictImage(req, res) {
    try {
        const imgBuffer = req.file.buffer;
        
        const imgBase64 = imgBuffer.toString("base64");

        let options = {
            scriptPath: "./PythonCode/",
        };

        let pyshell = new PythonShell("predict.py", options);

        pyshell.send(imgBase64);

        // Sử dụng Promise để đảm bảo rằng pyshell.end() đã hoàn thành trước khi tiếp tục
        const predict_result = await new Promise((resolve, reject) => {
            pyshell.on("message", (message) => {
                console.log("Kết quả từ Python:", message);
                resolve(message);
            });

            pyshell.end((err) => {
                if (err) {
                    reject(err);
                }
                console.log("Quá trình Python đã kết thúc.");
            });
        });

        return res.status(200).json({
            message: "predict image successfully",
            predict_result: predict_result,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

module.exports = predictImage;
