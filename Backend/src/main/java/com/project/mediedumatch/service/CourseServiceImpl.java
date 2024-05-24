package com.project.mediedumatch.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.project.mediedumatch.dao.CourseDao;
import com.project.mediedumatch.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseDao courseDao;

//		l=new ArrayList<>();


//	List<Course> list;

    public CourseServiceImpl() {
//		 list.add(new Course(143, "java core course", "this course is to  learn java"));
//       list.add(new Course(145, "spring boot course", "creating rest api"));

    }


    @Override
    public List<Course> getCourses() {
        List<Course> list=courseDao.findAll();
        Collections.sort(list, (c1, c2) -> c1.getGeneral_rank().compareTo(c2.getGeneral_rank()));

        return list ;
    }
    @Override
    public List<Course> getCourse(String state,String courseId,Long rank) {

//		Course c=null;
//		for(Course course : list) {
//			if(course.getId()==courseId) {
//				c=course;
//				break;
//			}
//		}

        List<Course> l = new ArrayList<>();
        List<Course> list=courseDao.findAll();
//		List<Course>	l = null;
//		list.forEach(e->{
//			}
//		});
        int w=0;
        if("Al".equals(state)) {
            for (Course e : list) {
                if ("general_rank".equals(courseId)) { // Use equals() for string comparison
                    if (e.getGeneral_rank() >= rank) {
                        l.add(e);
                        w=1;
                    }
                }
                if("obc_rank".equals(courseId)) {
                    if(e.getObc_rank()>=rank) {
                        l.add(e);
                        w=2;
                    }
                }
                if ("sc_rank".equals(courseId)) { // Use equals() for string comparison
                    if (e.getSc_rank() >= rank) {
                        l.add(e);
                        w=3;
                    }
                }
                if ("st_rank".equals(courseId)) { // Use equals() for string comparison
                    if (e.getSt_rank() >= rank) {
                        l.add(e);
                        w=4;
                    }
                }


            }
        }
        else {
            for (Course e : list) {
                if(e.getState().equals(state)) {

                    if ("general_rank".equals(courseId)) { // Use equals() for string comparison
                        if (e.getGeneral_rank() >= rank) {
                            l.add(e);
                            w=1;
                        }
                    }
                    if("obc_rank".equals(courseId)) {
                        if(e.getObc_rank()>=rank) {
                            l.add(e);
                            w=2;
                        }
                    }
                    if ("sc_rank".equals(courseId)) { // Use equals() for string comparison
                        if (e.getSc_rank() >= rank) {
                            l.add(e);
                            w=3;
                        }
                    }
                    if ("st_rank".equals(courseId)) { // Use equals() for string comparison
                        if (e.getSt_rank() >= rank) {
                            l.add(e);
                            w=4;
                        }
                    }
                }


            }
        }
        if(w==1) {
            Collections.sort(l, (c1, c2) -> c1.getGeneral_rank().compareTo(c2.getGeneral_rank()));
        }
        if(w==2) {
            Collections.sort(l,(c1,c2)->c1.getObc_rank().compareTo(c2.getObc_rank()));
        }
        if(w==3) {
            Collections.sort(l, (c1, c2) -> c1.getSc_rank().compareTo(c2.getSc_rank()));
        }
        if(w==4) {
            Collections.sort(l, (c1, c2) -> c1.getSt_rank().compareTo(c2.getSt_rank()));
        }
        return l;
    }


//	@Override
//	public Course addCourse(Course course) {
////		list.add(course);
//		courseDao.save(course);
//		return course;
//	}


//	@Override
//	public Course updateCourse(Course course) {
////		list.forEach(e -> {
////			if(e.getId()==course.getId()) {
////				e.setTitle(course.getTitle());
////				e.setDescription(course.getDescription());
////			}
////		});
//		courseDao.save(course);
//		return course;
//	}


//	@Override
//	public void deleteCourse(long parseLong) {
////		list=this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
////
//		 courseDao.deleteById(parseLong);	}
//


}
