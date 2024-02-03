let score = 84;
let grade = null;

if (score >= 90 && score <= 100)
{
    grade = "A";
}
else if (score >= 70 && score < 90)
{
    grade = "B";
}
else if (score >= 60 && score < 70)
{
    grade = "C";
}
else if (score >= 50 && score < 60)
{
    grade = "D";
}
else if (score >= 0 && score < 50)
{
    grade = "F";
}

console.log("Grade is : ", grade, "when score is : ", score);