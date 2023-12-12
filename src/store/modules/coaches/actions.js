export default {
    async registerCoach(context, data) {
        const userId = context.rootGetters.userId;
        const coachData = {
            id: context.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };

        const token = context.rootGetters.token

        const response = await fetch(`https://find-a-coach-13d0f-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json?auth=${token}`, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        });

        //const responseData = await response.json();

        if (!response.ok) {
            //error
        }



        context.commit('registerCoach', {
            ...coachData,
            id: userId
        });
    },
    async loadCoaches(context, payload) {
        if(!payload.forceRefresh && !context.getters.shouldUpdate){
            return
        }

        const respone = await fetch(`https://find-a-coach-13d0f-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`);
        const responeData = await respone.json();

        if (!respone.ok) {
            const error = new Error(responeData.message || 'Failed to Fetch');
            throw error;
        }

        const coaches = [];
        for (const key in responeData) {
            const coach = {
                id: key,
                firstName: responeData[key].firstName,
                lastName: responeData[key].lastName,
                description: responeData[key].description,
                hourlyRate: responeData[key].hourlyRate,
                areas: responeData[key].areas
            };
            coaches.push(coach);

            context.commit('setCoaches', coaches);
            context.commit('setFetchTimeStamp');
        }
    }
}
