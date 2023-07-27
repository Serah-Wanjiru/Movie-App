const BASE_URL=process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN=process.env.REACT_APP_ACCESS_TOKEN;

export const getMoviess=async ()=>{
    try{
           const response=await fetch(`${BASE_URL}/3/movie/popular`,{
            method:'GET',
            headers:{
                Authorization:`Bearer ${ACCESS_TOKEN}`,
                "Content-Type":'application/json'
            }
           });
           const result = await response.json()
           return result;
    }
    catch (error){
        return error.message
    }
}
