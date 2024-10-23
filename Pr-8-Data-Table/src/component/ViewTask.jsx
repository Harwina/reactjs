// src/components/ViewTask.jsx
import React, { useContext, useState } from 'react';
import { TaskContext } from '../TaskContext';
import { Link } from 'react-router-dom';

const ViewTask = () => {
    const { tasks, setTasks } = useContext(TaskContext);
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [courseFilter, setCourseFilter] = useState('');
    const [selectedTasks, setSelectedTasks] = useState([]);

    const handleDeleteSelected = () => {
        setTasks(tasks.filter((task) => !selectedTasks.includes(task.id)));
        setSelectedTasks([]);
    };

    const handleStatusChangeSelected = (status) => {
        const updatedTasks = tasks.map((task) =>
            selectedTasks.includes(task.id) ? { ...task, status } : task
        );
        setTasks(updatedTasks);
        setSelectedTasks([]);
    };

    const handleSelectTask = (id) => {
        setSelectedTasks((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((taskId) => taskId !== id)
                : [...prevSelected, id]
        );
    };

    const handleSort = () => {
        const sortedTasks = [...tasks].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });
        setTasks(sortedTasks);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const handleStatusFilter = (e) => {
        setStatusFilter(e.target.value);
    };

    const handleCourseFilter = (e) => {
        setCourseFilter(e.target.value);
    };

    const filteredTasks = tasks
        .filter((task) =>
            task.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((task) => (statusFilter ? task.status === statusFilter : true))
        .filter((task) =>
            courseFilter ? task.course.includes(courseFilter) : true
        );

    // Get unique list of courses for the filter dropdown
    const uniqueCourses = Array.from(
        new Set(tasks.flatMap((task) => task.course))
    );

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">View Tasks</h2>

            {/* Filter and Action Section */}
            <div className="card p-3 mb-4 shadow-sm">
                <div className="row justify-content-between">
                    <div className="col-md-3 mb-3 mb-md-0">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by name"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>


                    <div className="col-md-3">
                        <div className="d-flex justify-content-between">
                            <button
                                className="btn btn-outline-success me-2 w-100"
                                onClick={() => handleStatusChangeSelected('active')}
                                disabled={selectedTasks.length === 0}
                            >
                                Active
                            </button>
                            <button
                                className="btn btn-outline-danger w-100"
                                onClick={() => handleStatusChangeSelected('inactive')}
                                disabled={selectedTasks.length === 0}
                            >
                                Inactive
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <button
                            className="btn btn-danger"
                            onClick={handleDeleteSelected}
                            disabled={selectedTasks.length === 0}
                        >
                            Delete Selected
                        </button>
                    </div>
                    <div className=" mb-3 mb-md-0">
                        <select
                            className="form-select"
                            onChange={handleStatusFilter}
                            value={statusFilter}
                        >
                            <option value="">All Statuses</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>&nbsp;

                    <div className=" mb-3 mb-md-0">
                        <select
                            className="form-select"
                            onChange={handleCourseFilter}
                            value={courseFilter}
                        >
                            <option value="">All Courses</option>
                            {uniqueCourses.map((course) => (
                                <option key={course} value={course}>
                                    {course}
                                </option>
                            ))}
                        </select>
                    </div>&nbsp;

                </div>

            </div>

            {/* Task Table */}
            <div className="card shadow-sm">
                <div className="card-body p-0">
                    <table className="table table-striped table-bordered m-0">
                        <thead className="table-dark">
                            <tr>
                                <th className="text-center">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setSelectedTasks(filteredTasks.map((task) => task.id));
                                            } else {
                                                setSelectedTasks([]);
                                            }
                                        }}
                                        checked={
                                            selectedTasks.length > 0 &&
                                            selectedTasks.length === filteredTasks.length
                                        }
                                    />
                                </th>
                                <th onClick={handleSort} style={{ cursor: 'pointer' }}>
                                    Name {sortOrder === 'asc' ? '▲' : '▼'}
                                </th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Course</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTasks.map((task) => (
                                <tr key={task.id}>
                                    <td className="text-center">
                                        <input
                                            type="checkbox"
                                            checked={selectedTasks.includes(task.id)}
                                            onChange={() => handleSelectTask(task.id)}
                                        />
                                    </td>
                                    <td>{task.name}</td>
                                    <td>{task.email}</td>
                                    <td>{task.gender}</td>
                                    <td>{task.course.join(', ')}</td>
                                    <td>{task.date}</td>
                                    <td
                                        className={`text-white ${task.status === 'active' ? 'bg-success' : 'bg-danger'
                                            }`}
                                    >
                                        {task.status}
                                    </td>
                                    <td className="text-center">
                                        <Link
                                            to={`/edit/${task.id}`}
                                            className="btn btn-warning btn-sm me-2"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() =>
                                                setTasks(tasks.filter((t) => t.id !== task.id))
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewTask;
