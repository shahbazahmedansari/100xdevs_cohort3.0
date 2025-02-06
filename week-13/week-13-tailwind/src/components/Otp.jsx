import { useRef, useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

export const Otp = ({ number }) => {
    const ref = useRef(Array(number).fill(0));
    const [disabled, setDisabled] = useState(false);
    return (
        <div className="flex">

            {Array(number).fill(1).map((x, index) => <SubOtpBox reference={(e) => ref.current[index] = e} key={index} onDone={() => {
                if (index + 1 >= number) {
                    return;
                }
                ref.current[index + 1].focus();
            }} onBack={() => {
                if (index == 0) {
                    return;
                }
                ref.current[index - 1].focus();
            }} />)}

            <Button disabled={disabled}>Sign Up</Button>
        </div>
    );
};

function SubOtpBox({ reference, onDone, onBack }) {
    const [inputBoxVal, setInputBoxVal] = useState("");
    return (
        <input ref={reference} value={inputBoxVal} onKeyUp={(e) => {
            if (e.key == "Backspace") {
                onBack();
                setInputBoxVal("");
            }
        }} onChange={(e) => {
            const val = e.target.value;
            if (val == "1" || val == "2" || val == "3" || val == "4" || val == "5" || val == "6" || val == "7" || val == "8" || val == "9" || val == "0") {
                setInputBoxVal(val);
                onDone();
            }
        }} type="text" className="w-[40px] rounded-lg h-[50px] bg-blue-950 mr-4 outline-none px-4 text-white" />
    );
}

SubOtpBox.propTypes = {
    reference: PropTypes.any,
    onDone: PropTypes.func,
    onBack: PropTypes.func,
};

Otp.propTypes = {
    number: PropTypes.number,
};