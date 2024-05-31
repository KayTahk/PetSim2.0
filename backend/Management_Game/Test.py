from Task import Task
from Facilities import Facilities
from Employee import Employee
from Task_Processing import Task_Processing

def test_task_processing():
    # Create some sample employees
    employee1 = Employee(0, 100, "Big brain time", 5, 10, 20, 2)
    employee2 = Employee(0, 100, "Muscles", 5, 20, 2, 10)

    # Create a facilities object
    facilities = Facilities()

    # Create a sample task
    task = Task(0, 100, 5, "Big brain time", "strength", "dexterity", 0)

    # Create a Task_Processing object
    task_processing = Task_Processing(facilities)

    # Assign employees to work on the task
    employees = [employee1, employee2]

    # Call the work method to process the task
    task_processing.work(task, employees)

    # Check if the task progress and employee stress have been updated correctly

    print(task.progress)
    print("Test passed!")

# Call the test function
test_task_processing()
