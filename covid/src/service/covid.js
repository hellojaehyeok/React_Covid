
class Covid{

    constructor(key){
        this.key=key;
        this.getRequestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
    }

    
    async covidData(){
          fetch("http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?pageNo=1&numOfRows=10&startCreateDt=20200310&endCreateDt=20200315&serviceKey=" + this.key, this.getRequestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
}

export default Covid;