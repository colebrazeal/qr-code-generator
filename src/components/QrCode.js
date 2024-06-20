import { useContext } from "react";
import { InputContext } from "../App";
import { saveAs } from "file-saver";

const QrCode = () => {

    const { response, loading, error } = useContext(InputContext);
    const downloadImage = () => {
        saveAs(response, 'qrCode.png');
    }

    if(error) {
        return <div className="text-gray-500 flex items-center">
            Sorry, Something went wrong :/
        </div>
    }

  return (
    <div className="bg-gray-100 rounded-r-md flex flex-col items-center justify-center align-center">
        {response ? (
                    <div>
                    <img className="w-48" src={response} alt="qrCode" />
                    <button 
                    onClick={downloadImage}
                    className="bg-pink-400 text-white mt-2 px-4 py-1 w-48">
                        Download
                    </button>
                </div>
        ) : (
            <div className="text-gray-500">Your QrCode will show here...</div>
        )}

    </div>
  )
}

export default QrCode