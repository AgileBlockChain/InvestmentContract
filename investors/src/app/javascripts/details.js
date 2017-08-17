import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'
import investorregister_artifacts from '../../build/contracts/InvestorRegister.json'

var Investor = contract(investorregister_artifacts);

window.addEventListener('load', function() {
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://"+location.hostname+"/jsonrpc"));
    Investor.setProvider(web3.currentProvider);
})


window.getRecord = function() {
    var id = document.getElementById("investorId").value;
    Investor.deployed().then(function(instance) {
    return instance.getInvestorRecord(id) }).then(function(result) {
        console.log(result);
        console.log("Tcontact: "+result[0]+"\n"+"Id: "+result[1]+"\n"+"Date: "+result[2]+"\n"+"Amount: "+result[3]);
        getInvestorDoc(id, result[0], result[1], result[2], result[3] );
    })
}

window.getInvestorDoc = function(id, contact, Tid, date, amount) {
    Investor.deployed().then(function(instance) {
    return instance.getInvestorDoc(id) }).then(function(result) {
        if (result[0] == 0) {
            alert("Invalid Id");
        } else {
            console.log (result);
            console.log("DocHash: "+result[0]+"\n"+"PurchaseAgreement: "+result[1]+"\n"+"PromisoryNote: "+result[2]+"\n"+"W_9: "+result[3]+"\n"+"Questionnare: "+result[4]);
            document.getElementById("content").innerHTML = "<h4>Your Id is <b>"+Tid+"</b> </h4>"+"<b>Transaction Contact: </b>"+contact+"<br>"+"<b>Transaction Id: </b>"+Tid+"<br>"+"<b>Investment Date: </b>"+date+"<br>"+"<b>Amount: </b>"+amount+"<br>"+"<b>DocHash: </b><a href ='http://"+location.hostname+"/ipfsgateway/ipfs/"+result[0]+"' target='_blank'>"+result[0]+"</a><br>"+
           "<b>PurchaseAgreement: </b><a href ='http://"+location.hostname+"/ipfsgateway/ipfs/"+result[1]+"' target='_blank'>"+result[1]+"</a><br>"+
           "<b>PromisoryNote: </b><a href ='http://"+location.hostname+"/ipfsgateway/ipfs/"+result[2]+"' target='_blank'>"+result[2]+"</a><br>"+
           "<b>W_9: </b><a href ='http://"+location.hostname+"/ipfsgateway/ipfs/"+result[3]+"' target='_blank'>"+result[3]+"</a><br>"+
           "<b>Questionnare: </b><a href ='http://"+location.hostname+"/ipfsgateway/ipfs/"+result[4]+"' target='_blank'>"+result[4];
        }
    })
}


