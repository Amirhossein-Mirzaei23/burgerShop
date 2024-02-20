export default defineEventHandler(async (event) => {
    const body=await readBody(event)
    const token = getCookie(event, 'token');
    const { public : {apiBase} }= useRuntimeConfig();

    try {
        const data=await  $fetch(`${apiBase}/profile/addresses/create`, {
            method: 'POST',
            body: body,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }     
        });

            return data.data;

    } catch (error) {
           return error;
    }
})