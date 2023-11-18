import {useCallback, useContext} from 'react'
import AlertContext from '../../context/Alert/AlertContext'
function Alert() {
    const {alert} = useContext(AlertContext);
  return (alert !== null && (
    <p className="items-start mb-4">
          <p className="flex-1 leading-7 text-base font-semibold">{alert.msg}</p>
    </p>
  )) 
}

export default Alert
