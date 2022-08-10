/*
আমরা এখানে জাভাস্ক্রিপ্টের প্রোটোটাইপ চেইন ব্যবহার করে মাল্টি লেভেল ইনহেরিট্যান্স ইমপ্লিমেন্ট করেছি।
*/

let grandfather = {
   grandfatherProperty : function(){
     console.log("Grandfather's property")
   }
}

let father = {
   __proto__ : grandfather,
   fatherProperty : function(){
     console.log("Father's property")
   }
}

let son = {
   __proto__ : father,
   sonProperty : function(){
     console.log("Son's Property")
   }
}

son.grandfatherProperty();          // আউটপুটঃ Grandfather's property


class Grandfather {
   grandfatherProperty(){
     console.log("Grandfather's property")
   }
}

class Father extends Grandfather {
   fatherProperty(){
     console.log("Father's property")
   }
}

class Son extends Father {
   sonsProperty(){
     console.log("Son's property")
   }
}

const son1 = new Son();
son.grandfatherProperty()          // আউটপুটঃ Grandfather's property



