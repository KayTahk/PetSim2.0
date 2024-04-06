from Task import Task
from Facilities import Facilities
from Employee import Employee

class Task_Processing:
    def __init__(self, facilities):
        self.facilities = facilities
        
    def work(self, task, employees):
        stat1 = 0
        stat2 = 0
        num_employees = 0

        for employee in employees:
            num_employees += 1
            if task.skillset == employee.skillset: 
                stat1 += getattr(employee, task.stat1) * 2
                stat2 += getattr(employee, task.stat2) * 2 
            else:
                stat1 += getattr(employee, task.stat1)
                stat2 += getattr(employee, task.stat2)  

        stat1 /= num_employees  
        stat2 /= num_employees  
    
        task.progress += (stat1 + getattr(self.facilities, f"{task.stat1}_boost")) * getattr(self.facilities, f"{task.stat1}_mod")
        task.progress += ((stat2 + getattr(self.facilities, f"{task.stat2}_boost")) * getattr(self.facilities, f"{task.stat2}_mod")) / 2

        for employee in employees:
            employee.stress += task.difficulty * 2   

        if task.progress >= task.progress_needed:
            overflow = task.progress - task.progress_needed
            employee.stress -= overflow
            return True
        else:
            return False


