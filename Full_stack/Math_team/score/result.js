export const getResult = (arr)=>{
    const totalTime =arr.reduce( (acc,curr)=>curr.get("time")+acc,0)
    const totalScore = arr.reduce( (acc,curr)=> curr.get("ball")+acc,0)

   if(totalScore==30) return `siz maximal ball ${totalScore}ni ${totalTime} soniyada to'pladingiz`;
   if(totalScore>=22 && totalScore<30) return  ` "YAXSHI": siz ${totalScore} ballni ${totalTime} soniyada to'pladingiz`;
   if(totalScore>=16 && totalScore<22) return  `USTINGIZDA ISHLANG: siz ${totalScore} ballni ${totalTime} soniyada to'pladingiz`;
   if(totalScore<=16 &&totalScore>0) return `"JUDA YOMON" siz ${totalScore} ballni ${totalTime} soniyada to'pladingiz`;
   if(totalScore<=0 && totalScore>30) return `Malumotlarda xatolik\n   Qaytadan urunib ko'ring` 
};
