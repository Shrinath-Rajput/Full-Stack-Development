i=0
student={
    "name" :"Shrinath",
    "Subjet":{
        1:"Python",
        2:"ETL",
        3:"MAths",
        4:"ML"

    },
    "marks": 88,
    "grade": "A+",
   "Result":"Pass"

}
#IMP loop in dict 
keys=list(student.keys())
while i< len(keys):
    print(keys[i],":",student[keys[i]])
    i+=1

student["grade"]='A'
student["name"]="Virat"
print(student["name"])
print(student)