export interface quiz{
    id:number;
    title:string;
    description:string;
    maxMarks:BigInteger;
    numberofQuestions:BigInteger;
    category:{
        cid:number;
    }
}