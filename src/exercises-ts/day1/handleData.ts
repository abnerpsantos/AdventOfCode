import { getData } from '../../utils/getData';

 export async function handleData() {
 const rawData = await getData('1')
 return rawData
}