pragma solidity ^0.4.11;

contract InvestorRegister {
    uint public InvestorId = 1000;
    uint public totalAmount = 0;
    uint public totalInvestedAmount = 0;
    uint public totalInvestors;
    
    struct InvestorRecords {
        string transcationContact;
        uint investorId;
        string investmentDate;
        uint investedAmount;
        uint investmentAmount;
        string investerInfoDoc;
        string purchaseAgreement;
        string promisoryNote;
        string w_9;
        string questionnare;
    }
    mapping (uint  => InvestorRecords) investor;
    uint [] investorIndex;
    
    
    function createInvestorRecord (string transcationContact,string investmentDate, uint investmentAmount, string investerInfoDoc, string purchaseAgreement, string promisoryNote, string w_9, string questionnare, uint investedAmount) {   
        InvestorId = (InvestorId+5);
        investor[InvestorId].transcationContact = transcationContact;
        investor[InvestorId].investorId = InvestorId;
        investor[InvestorId].investmentDate = investmentDate;
        investor[InvestorId].investmentAmount = investmentAmount;
        investor[InvestorId].investerInfoDoc = investerInfoDoc;
        investor[InvestorId].purchaseAgreement = purchaseAgreement;
        investor[InvestorId].promisoryNote = promisoryNote;
        investor[InvestorId].w_9 = w_9;
        investor[InvestorId].questionnare = questionnare;
        investorIndex.push(InvestorId);
        totalAmount = totalAmount + investmentAmount;
        totalInvestedAmount = totalInvestedAmount + investedAmount;
    }
    
    function getInvestorRecord (uint investorId) public constant returns (string transcationContact, uint investoId, string investmentDate, uint investmentAmount) {
        return (
            investor[investorId].transcationContact,
            investor[investorId].investorId,
            investor[investorId].investmentDate,
            investor[investorId].investmentAmount
        );
    }

    function getInvestorDoc(uint investorId) public constant returns (string investerInfoDoc, string purchaseAgreement, string promisoryNote, string w_9, string questionnare) {
        return (
            investor[investorId].investerInfoDoc,
            investor[investorId].purchaseAgreement,
            investor[investorId].promisoryNote,
            investor[investorId].w_9,
            investor[investorId].questionnare
        );
    }
    function getInvestorId() public constant returns (uint InvestorID) {
        return (
            InvestorId + 5
        );
    } 
   function getTotal() public constant returns (uint, uint, uint) {
       return (
           totalAmount,
           totalInvestedAmount,
           totalInvestors = investorIndex.length
       );
   }
}


