import { useState } from "react"

export const useContert = (valorinicial = 0) => {
    const [contador, setContador] = useState(valorinicial)
    const incrementar = (valor = 1) =>{
        setContador(contador + valor)
    }
    const decrementar = (valor = 1, negativo=true)=>{
        if(!negativo && contador < 0) {
            setContador(0)
            return
        }
        setContador(contador - valor)
    }
    const resetear = () => {
        setContador(0)
    }
    return{
        contador,
        incrementar,
        decrementar,
        resetear
    }

}
