import axios from 'axios'
import { procesarCasosComunas } from '../helpers/wrangling'

const urlCasosComunas = 'https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto1/Covid-19.csv'

export const fetchCasosComunas = () => axios.get(urlCasosComunas)
    .then(({ data }) => procesarCasosComunas(data))