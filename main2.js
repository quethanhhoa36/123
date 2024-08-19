var courseApi ='http://localhost:3000/course';

var listCoursesBlock= document.querySelector('#list-courses');
function start(){
    getCourses(renderCourses);
    
}
start();
function getCourses(callback){
    fetch(courseApi)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}
function renderCourses(courses){
    var listCoursesBlock= document.querySelector('#list-courses');
    var htmls = courses.map(function(course){
        return `
                    <h4>id: ${course.id}</h4>
                    <p>title: ${course.title}</p>
                    <span>views: ${course.views}</span>
                    <br>
                `;
    });
    listCoursesBlock.innerHTML=htmls.join('');
}
function handleCreateForm(){
        var updateBtn=document.querySelector('#create');
        updateBtn.onclick=function(){
            var id= document.querySelector('input[name="id"]').value;
            var title=document.querySelector('input[name="title"').value;
            var views=document.querySelector('input[name="views"]').value;
        }
};