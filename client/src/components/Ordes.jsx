import { useDispatch } from "react-redux"
import { ASCENDENTE, DESCENDENTE } from "../constantes/sort"
import { Sort } from "../store/actions/index.js"

export default function Order() {
    const dispatch = useDispatch()
    function onSelectChange(e) {
        dispatch(Sort(e.target.value))
    }
    
    return <select name="select" onChange={onSelectChange}>
    <option value={ASCENDENTE}>ascendente</option>
    <option value={DESCENDENTE}>descendente</option>
  </select>
}