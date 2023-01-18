import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions/index";
import "./popup.css";

const Popup = (props) => {
  const { text } = props;
  const dispatch = useDispatch();
  const displayPopUp = useSelector((state) => state.displayPopUp);
  const activityError = useSelector((state) => state.activityError);
  const handlePop = () => {
    dispatch(actions.displayPopUp());
    dispatch(actions.clearActivityError(""));
  };
  if (displayPopUp[0]) {
    if (activityError !== "") {
      return (
        <div className="errorBackground">
          <div className="externalPUContainerE">
            <div className="internalPUContainerE">
              <div className="errorsPopUp">
                <div>Following errors.</div>
                <ul className="errorsList">
                  <li key="dupped">. . \ \ {activityError}.</li>
                </ul>
              </div>
              <button onClick={handlePop} className="buttonPopUpE">
                Accept
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className="externalPUContainerS">
            <div className="internalPUContainerS">
              <div className="successPopUp">
                <div className="successTitle">Activity creation success</div>
                <ul className="successList">
                  {text &&
                    Object.values(text).map((e) => (
                      <li key={"succ" + e[0]} className="liSuccess">
                        {" ..\\" +
                          "\\ " +
                          Object.keys(text)[Object.values(text).indexOf(e)] +
                          ".."}
                        <div className="statsSuccess">{e.toString()}</div>
                      </li>
                    ))}
                </ul>
              </div>
              <button onClick={handlePop} className="buttonPopUpS">
                Accept
              </button>
            </div>
          </div>
        </>
      );
    }
  } else {
    return <></>;
  }
};

export default Popup;
