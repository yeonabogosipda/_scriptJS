const jobs = [
 { id: 'David', isActive: true},
 { id: 'Steph', isActive: true},
 { id: 'Kate', isActive: false},
];
const activeJobs = jobs.filter(function(job){
 return job.isActive;
});
console.log(activeJobs);

# activeJobs변수를 arrow function(화살표 함수) 을 사용하여 해당 코드를 줄입니다.

const activeJobs = jobs.filter(job => job.isActive)
console.log(activeJobs);
