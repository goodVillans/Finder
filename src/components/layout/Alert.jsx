import { useContext } from 'react'
import AlertContext from '../../context/Alert/AlertContext'

function Alert() {
  const { alert } = useContext(AlertContext);
  
   return alert !== null && (
      <div className="flex items-start mb-4 space-x-2">
         <p className="felx-1 text-base font-semibold leading-7 text-white">
            {alert.message}
         </p>
      </div>
   )
}

export default Alert
