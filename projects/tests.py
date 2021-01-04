from django.test import TestCase
from django.contrib.auth.models import User
from .models import Project, Task, IssueTypes, Issue

# Create your tests here.

class TestModels(TestCase):
    
    def project_vaild(self):
        response = Project(
            name="Test Project",
            github_link="https://www.github.com/",
            live_link="https://www.youtube.com/",
            description="Description of a test project for testing purposes",
            notes="Some small notes for this project"
        )
        response.save()
        self.assertEqual(str(response), "Test Project")
        self.assertEqual(response.name, "Test Project")
        self.assertEqual(response.github_link, "https://www.github.com/")
        self.assertEqual(response.live_link, "https://www.youtube.com/")
        self.assertEqual(response.description, "Description of a test project for testing purposes")
        self.assertEqual(response.notes, "Some small notes for this project")

    def task_valid(self):
        project = Project.objects.get(id=1)
        response = Task(
            project=project,
            name="Task for Project",
            description="Test description for task",
            notes="test notes"
        )
        response.save()
        self.assertEqual(str(response), "Task for Project")
        self.assertEqual(response.name, "Task for Project")
        self.assertFalse(response.closed)
        self.assertEqual(response.description, "Test description for task")
        self.assertEqual(response.notes, "test notes")

    def issue_types_valid(self):
        response = IssueTypes(
            option="Bug"
        )
        response.save()
        self.assertEqual(str(response), "Bug")
        self.assertEqual(response.option, "Bug")

    def issue_valid_open(self):
        project = Project.objects.get(id=1)
        issue_type = IssueTypes.objects.get(option="Bug")
        response = Issue(
            project=project,
            name="Fix this test",
            issue_type=issue_type,
            description="Description for issue",
            notes="notes for issue"
        )
        response.save()
        self.assertEqual(str(response), "1 - Bug - Open")
        self.assertEqual(response.name, "Fix this test")
        self.assertEqual(response.issue_type.option, "Bug")
        self.assertFalse(response.closed)
        self.assertEqual(response.description, "Description for issue")
        self.assertEqual(response.notes, "notes for issue")

    def issue_valid_closed(self):
        project = Project.objects.get(id=1)
        issue_type = IssueTypes.objects.get(option="Bug")
        response = Issue(
            project=project,
            name="Add coverage",
            issue_type=issue_type,
            closed=True,
            description="No coverage in testing",
            notes="notes for issue"
        )
        response.save()
        self.assertEqual(str(response), "2 - Bug - Closed")
        self.assertEqual(response.name, "Add coverage")
        self.assertEqual(response.issue_type.option, "Bug")
        self.assertTrue(response.closed)
        self.assertEqual(response.description, "No coverage in testing")
        self.assertEqual(response.notes, "notes for issue")


    def test_in_order(self):
        self.project_vaild()
        self.task_valid()
        self.issue_types_valid()
        self.issue_valid_open()
        self.issue_valid_closed()

class TestViews(TestCase):

    def setUp(self):
        user = User.objects.create_user(username="mspe")
        user.set_password('testpassword')
        user.save()
        project = Project(
            name="Test Project",
            github_link="https://www.github.com/",
            live_link="https://www.youtube.com/",
            description="Description of a test project for testing purposes",
            notes="Some small notes for this project"
        )
        project.save()
        p = Project.objects.get(name="Test Project")
        project = Project.objects.get(name="Test Project")
        task = Task(
            project=project,
            name="Task for Project",
            description="Test description for task",
            notes="test notes"
        )
        task.save()

        issue_type = IssueTypes(
            option="Bug"
        )
        issue_type.save()

        issue_type = IssueTypes.objects.get(option="Bug")
        issue = Issue(
            project=project,
            name="Fix this test",
            issue_type=issue_type,
            description="Description for issue",
            notes="notes for issue"
        )
        issue.save()

    def test_all_projects_logged_in(self):
        """Retrieve projects urls while logged in should return 200"""
        self.client.login(username='mspe', password="testpassword")
        response = self.client.get('/projects/')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'<h1 class="roboto weight-500">Projects</h1>', response.content)

    def test_all_project_loggout_out(self):
        """Attempt to get projects page while not logged in, should redirect"""
        response = self.client.get('/projects/')
        self.assertEqual(response.status_code, 302)

    def test_project_view_logged_in(self):
        """Go to project page view should return 200"""
        self.client.login(username='mspe', password="testpassword")
        p = Project.objects.all().first()
        response = self.client.get('/projects/' + str(p.id))
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'<h1 class="roboto weight-500">Test Project</h1>', response.content)

    def test_project_view_logged_out(self):
        """Attempt to get project view page while not logged in, should redirect"""
        p = Project.objects.all().first()
        response = self.client.get('/projects/' + str(p.id))
        self.assertEqual(response.status_code, 302)

    def test_task_view_logged_in(self):
        """Test reponse of task view while logged in, should return 200"""
        self.client.login(username='mspe', password="testpassword")
        t = Task.objects.all().first()
        response = self.client.get('/projects/task/'+ str(t.id))
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'<h1 class="roboto weight-500">Task for Project</h1>', response.content)

    def test_task_view_logged_out(self):
        """Test response of task view while logged out, should return 302"""
        t = Task.objects.all().first()
        response = self.client.get('/projects/task/'+ str(t.id))
        self.assertEqual(response.status_code, 302)

    def test_issue_view_logged_in(self):
        """Test response of issue view while logged in, should return 200"""
        self.client.login(username='mspe', password="testpassword")
        i = Issue.objects.all().first()
        response = self.client.get('/projects/issue/'+ str(i.id))
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'<h1 class="roboto weight-500">Fix this test</h1>', response.content)

    def test_issue_view_logged_out(self):
        """Test response of issue view while logged out, should return 302"""
        i = Issue.objects.all().first()
        response = self.client.get('/projects/issue/'+ str(i.id))
        self.assertEqual(response.status_code, 302)
    
    def test_task_edit_logged_in(self):
        """Test response of task edit view while logged in, should return 200"""
        self.client.login(username='mspe', password="testpassword")
        t = Task.objects.all().first()
        response = self.client.get('/projects/task/'+ str(t.id) +'/edit')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'<h1 class="roboto weight-500">Edit Task</h1>', response.content)
    
    def test_task_edit_logged_out(self):
        """Test response of task edit view while loggged out, should return 302"""
        t = Task.objects.all().first()
        response = self.client.get('/projects/task/'+ str(t.id) +'/edit')
        self.assertEqual(response.status_code, 302)

    def test_task_edit_post(self):
        """Test post to edit task"""
        self.client.login(username="mspe", password="testpassword")
        t = Task.objects.all().first()
        response = self.client.post(
            '/projects/task/'+ str(t.id) +'/edit',
            {
                'name': 'New Test Task',
                'description': ' New Test Description',
                'notes': 'New Test Notes'
            },
            follow=True,
        )
        self.assertIn(b'Task Updated', response.content)
        self.assertIn(b'New Test Task', response.content)
        self.assertIn(b'New Test Description', response.content)
        self.assertIn(b'New Test Notes', response.content)

    def test_issue_edit_logged_in(self):
        """Test response of issue edit view while logged in, should return 200"""
        self.client.login(username='mspe', password="testpassword")
        i = Issue.objects.all().first()
        response = self.client.get('/projects/issue/'+ str(i.id) +'/edit')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'<h1 class="roboto weight-500">Edit Issue</h1>', response.content)
    
    def test_issue_edit_logged_out(self):
        """Test response of issue edit view while logged out,
        should return 302"""
        i = Issue.objects.all().first()
        response = self.client.get('/projects/issue/'+ str(i.id) +'/edit')
        self.assertEqual(response.status_code, 302)

    def test_issue_edit_post(self):
        """Test post to add edit issue"""
        self.client.login(username="mspe", password="testpassword")
        i = Issue.objects.all().first()
        i_t = IssueTypes.objects.all().first()
        response = self.client.post(
            '/projects/issue/'+ str(i.id) +'/edit',
            {
                'name': 'New Test Issue',
                'issue_type': i_t.id,
                'description': 'New Test Description',
                'notes': 'New Test Notes'
            },
            follow=True,
        )
        self.assertIn(
            b'Issue Updated',
            response.content
        )
        self.assertIn(b'New Test Issue', response.content)
        self.assertIn(b'New Test Description', response.content)
        self.assertIn(b'New Test Notes', response.content)

    def test_task_add_logged_in(self):
        """Test response of add task view while logged in, should return 200"""
        self.client.login(username='mspe', password="testpassword")
        p = Project.objects.all().first()
        response = self.client.get('/projects/'+ str(p.id) +'/new/task')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'<h1 class="roboto weight-500">Add Task</h1>', response.content)
    
    def test_task_add_logged_out(self):
        """Test response of add task view while logged out,
        should return 302"""
        p = Project.objects.all().first()
        response = self.client.get('/projects/'+ str(p.id) +'/new/task')
        self.assertEqual(response.status_code, 302)

    def test_task_add_post(self):
        """Test post to add a new task while logged in,
        should return Added New Task in HTML content"""
        self.client.login(username="mspe", password="testpassword")
        p = Project.objects.all().first()
        response = self.client.post(
            '/projects/'+ str(p.id) +'/new/task',
            {
                'name': 'Test Task',
                'description': 'Test Description',
                'notes': 'Test Notes'
            },
            follow=True,
        )
        self.assertIn(
            b'Added New Task',
            response.content
        )

    def test_issue_add_logged_in(self):
        """Test response of add issue view while logged in, should return 200"""
        self.client.login(username='mspe', password="testpassword")
        p = Project.objects.all().first()
        response = self.client.get('/projects/'+ str(p.id) +'/new/issue')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'<h1 class="roboto weight-500">Add Issue</h1>', response.content)
    
    def test_issue_add_logged_out(self):
        """Test response of add issue view while logged out,
        should return 302"""
        p = Project.objects.all().first()
        response = self.client.get('/projects/'+ str(p.id) +'/new/issue')
        self.assertEqual(response.status_code, 302)

    def test_issue_add_post(self):
        """Test post to add a new issue while logged in,
        should return Added New Issue in the HTML content"""
        self.client.login(username="mspe", password="testpassword")
        p = Project.objects.all().first()
        i_t = IssueTypes.objects.all().first()
        response = self.client.post(
            '/projects/'+ str(p.id) +'/new/issue',
            {
                'name': 'Test Task',
                'issue_type': i_t.id,
                'description': 'Test Description',
                'notes': 'Test Notes'
            },
            follow=True,
        )
        self.assertIn(
            b'Added New Issue',
            response.content
        )

    def test_toggle_task_start_open(self):
        """Toggle task from open to closed"""
        self.client.login(username="mspe", password="testpassword")
        t = Task.objects.all().first()
        response = self.client.get(
            '/projects/task/toggle-task/' + str(t.id),
            follow=True
        )
        self.assertIn(
            b'Task Closed', response.content
        )
    
    def test_toggle_task_start_closed(self):
        """Toggle task from closed to open"""
        self.client.login(username="mspe", password="testpassword")
        p = Project.objects.all().first()
        t = Task.objects.create(
            project=p,
            name="Starting Closed",
            closed=True,
            description="Test Description",
            notes="Test Notes"
        )
        t.save()
        task = Task.objects.get(name="Starting Closed", closed=True)
        response = self.client.get(
            '/projects/task/toggle-task/' + str(task.id),
            follow=True
        )
        self.assertIn(
            b'Task Open', response.content
        )

    def test_toggle_issue_start_open(self):
        """Togggle issue from open to closed"""
        self.client.login(username="mspe", password="testpassword")
        i = Issue.objects.all().first()
        response = self.client.get(
            '/projects/issue/toggle-issue/' + str(i.id),
            follow=True
        )
        self.assertIn(
            b'Issue Closed', response.content
        )

    def test_toggle_issue_start_closed(self):
        """Toggle issue from closed to open"""
        self.client.login(username="mspe", password="testpassword")
        p = Project.objects.all().first()
        i_t = IssueTypes.objects.all().first()
        i = Issue.objects.create(
            project=p,
            name="Starting Closed",
            issue_type=i_t,
            closed=True,
            description="Test Description",
            notes="Test Notes"
        )
        i.save()
        issue = Issue.objects.get(name="Starting Closed", closed=True)
        response = self.client.get(
            '/projects/issue/toggle-issue/' + str(issue.id),
            follow=True
        )
        self.assertIn(
            b'Issue Open', response.content
        )
    
    def test_delete_task_while_logged_in(self):
        """Test deletion of a task while logged in,
        should return Task Delete in HTML content"""
        self.client.login(username='mspe', password="testpassword")
        t = Task.objects.all().first()
        cache_id = str(t.id)
        response = self.client.get(
            '/projects/task/'+ cache_id +'/delete',
            follow=True
        )
        self.assertIn(b'Task Deleted', response.content)
    
    def test_delete_task_while_logged_out(self):
        """Test deletion of a task while logged out, should return 302"""
        t = Task.objects.all().first()
        cache_id = str(t.id)
        response = self.client.get(
            '/projects/task/'+ cache_id +'/delete'
        )
        self.assertEqual(response.status_code, 302)


    def test_delete_issue_while_logged_in(self):
        """Test deletion of a issue while logged in,
        should return Issue Deleted in HTML content"""
        self.client.login(username='mspe', password="testpassword")
        i = Issue.objects.all().first()
        cache_id = str(i.id)
        response = self.client.get(
            '/projects/issue/'+ cache_id +'/delete',
            follow=True
        )
        self.assertIn(b'Issue Deleted', response.content)

    def test_delete_issue_while_logged_out(self):
        """Test deletion of a issue while logged out, should return 302"""
        i = Issue.objects.all().first()
        cache_id = str(i.id)
        response = self.client.get(
            '/projects/issue/'+ cache_id +'/delete'
        )
        self.assertEqual(response.status_code, 302)

    def test_add_project_view_while_logged_in(self):
        """Test response of add new project view while logged in, 
        should return 200 and Add New Project in HTML content"""
        self.client.login(username="mspe", password="testpassword")
        response = self.client.get('/projects/new')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'New Project', response.content)

    def test_add_project_view_while_logged_out(self):
        """Test response of add new project view while logged out,
        should return 302"""
        response = self.client.get('/projects/new')
        self.assertEqual(response.status_code, 302)

    def test_add_project_view_post_while_logged_in(self):
        """Test response of the post to projects/new,
        should return Project Created in HTML content"""
        self.client.login(username="mspe", password="testpassword")
        response = self.client.post(
            '/projects/new',
            {
                'name':' Test Project New',
                'description': 'Test Description New',
                'notes': 'Test Notes New',
                'github_link': 'https://www.github.com/msped/mspe'
            },
            follow=True
        )
        self.assertIn(b'Project Created', response.content)

    def test_add_project_view_post_while_logged_out(self):
        """Test response of the post to projects/new,
        should return 302"""
        response = self.client.post(
            '/projects/new',
            {
                'name':' Test Project New',
                'description': 'Test Description New',
                'notes': 'Test Notes New',
                'github_link': 'https://www.github.com/msped/mspe'
            }
        )
        self.assertEqual(response.status_code, 302)

    def test_edit_project_view_while_logged_in(self):
        """Test response of add new project view while logged in, 
        should return 200 and Add New Project in HTML content"""
        self.client.login(username="mspe", password="testpassword")
        p = Project.objects.all().first()
        response = self.client.get('/projects/'+ str(p.id) +'/edit')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Edit Project', response.content)

    def test_edit_project_view_while_logged_out(self):
        """Test response of add new project view while logged out,
        should return 302"""
        p = Project.objects.all().first()
        response = self.client.get('/projects/'+ str(p.id) +'/edit')
        self.assertEqual(response.status_code, 302)

    def test_edit_project_view_post_while_logged_in(self):
        """Test response of the post to projects/edit,
        should return Project Created in HTML content"""
        self.client.login(username="mspe", password="testpassword")
        p = Project.objects.all().first()
        response = self.client.post(
            '/projects/'+ str(p.id) +'/edit',
            {
                'name':' Test Project New',
                'description': 'Test Description New',
                'notes': 'Test Notes New',
                'github_link': 'https://www.github.com/msped/mspe'
            },
            follow=True
        )
        self.assertIn(b'Project Updated', response.content)

    def test_edit_project_view_post_while_logged_out(self):
        """Test response of the post to projects/edit,
        should return 302"""
        p = Project.objects.all().first()
        response = self.client.post(
            '/projects/'+ str(p.id) +'/edit',
            {
                'name':' Test Project Edited',
                'description': 'Test Description Edited',
                'notes': 'Test Notes Edited',
                'github_link': 'https://www.github.com/msped/mspe'
            }
        )
        self.assertEqual(response.status_code, 302)

    def test_delete_project_while_logged_in(self):
        """Test deletion of a project while logged in, should return 200"""
        self.client.login(username="mspe", password="testpassword")
        p = Project.objects.all().first()
        response = self.client.get(
            '/projects/'+ str(p.id) +'/delete',
            follow=True
        )
        self.assertIn(b'Project Deleted', response.content)

    def test_delete_project_while_logged_out(self):
        """Test deletion of a project while logged out, should return 302"""
        p = Project.objects.all().first()
        response = self.client.get('/projects/'+ str(p.id) +'/delete')
        self.assertEqual(response.status_code, 302)