
import CourseCard from '../CourseCard/CourseCard';



const InstractorCourse = ({course=[]}) => {
   

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {
                course.slice(0, 3).map(item => <CourseCard key={item._id} course={item} />)
            }
        </div>
    );
};

export default InstractorCourse;