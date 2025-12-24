---
title: Module 2 - Gazebo
sidebar_position: 3
---

# Module 2 - Gazebo

## Introduction to Gazebo

Gazebo is a powerful open-source robotics simulator that allows you to create, test, and validate robotic systems in a realistic 3D environment. It provides:
- High-fidelity physics simulation
- Advanced graphics rendering
- Integration with ROS/ROS2
- A rich library of sensors
- A repository of models and environments

Gazebo is an essential tool for robotics development, as it allows you to:
- Test algorithms without risk of damaging real robots
- Experiment with different scenarios and environments
- Validate control strategies before deployment
- Generate synthetic data for training AI models
- Reproduce experiments consistently

## Gazebo Classic vs. Gazebo (Ignition)

There are two main versions of Gazebo that are important to understand:

### Gazebo Classic
- The traditional version of Gazebo, widely used in the robotics community
- Uses OGRE for rendering and ODE/PhysX for physics
- Well-documented with a large user base
- Tightly integrated with ROS
- Still maintained but slowly being phased out in favor of newer versions

### Gazebo (Ignition)
- The newer generation of Gazebo, designed as a modular system
- Based on Ignition Robotics libraries
- Offers improved performance and modularity
- Better support for distributed simulation
- Designed with ROS2 integration in mind
- More extensible plugin architecture

For this course, we'll focus on Gazebo Classic due to its extensive documentation and widespread use, but the concepts translate well to the newer versions.

## Setting Up Your First Simulation

Before diving into complex simulations, let's create a basic simulation environment:

1. **Launch Gazebo:**
   ```bash
   gazebo
   ```

2. **Explore the GUI:**
   - The main 3D view shows the world
   - The top toolbar contains simulation controls
   - The left panel has a model/database browser
   - The right panel shows world properties and entities

3. **Basic Controls:**
   - Click and drag: Orbit camera
   - Scroll wheel: Zoom in/out
   - Right-click and drag: Pan camera
   - Shift + Left-click and drag: Move objects

## Importing URDF Robots into Simulation

One of the most important aspects of Gazebo is the ability to simulate your own custom robots. This is typically done by importing URDF (Unified Robot Description Format) models.

### URDF to SDF Conversion

Gazebo uses SDF (Simulation Description Format) internally, so URDF models need to be converted. The good news is that Gazebo can handle this conversion automatically using the `libgazebo_ros_kinematics` plugin.

### Example: Creating a Simple Robot Model

First, let's create a simple robot URDF file:

```xml
<?xml version="1.0"?>
<robot name="simple_mobile_robot" xmlns:xacro="http://www.ros.org/wiki/xacro">

  <!-- Materials -->
  <material name="blue">
    <color rgba="0 0 0.8 1"/>
  </material>
  <material name="black">
    <color rgba="0 0 0 1"/>
  </material>
  <material name="white">
    <color rgba="1 1 1 1"/>
  </material>

  <!-- Base Link -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="0.5 0.5 0.2"/>
      </geometry>
      <material name="blue"/>
    </visual>
    <collision>
      <geometry>
        <box size="0.5 0.5 0.2"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="10"/>
      <inertia ixx="0.42" ixy="0" ixz="0" iyy="0.42" iyz="0" izz="0.83"/>
    </inertial>
  </link>

  <!-- Wheels -->
  &lt;link name="front_wheel"&gt;
    &lt;visual&gt;
      &lt;geometry&gt;
        &lt;cylinder radius="0.1" length="0.05"/&gt;
      &lt;/geometry&gt;
      &lt;material name="black"/&gt;
    &lt;/visual&gt;
    &lt;collision&gt;
      &lt;geometry&gt;
        &lt;cylinder radius="0.1" length="0.05"/&gt;
      &lt;/geometry&gt;
    &lt;/collision&gt;
    &lt;inertial&gt;
      &lt;mass value="1"/&gt;
      &lt;inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.002"/&gt;
    &lt;/inertial&gt;
  &lt;/link&gt;

  &lt;link name="back_wheel"&gt;
    &lt;visual&gt;
      &lt;geometry&gt;
        &lt;cylinder radius="0.1" length="0.05"/&gt;
      &lt;/geometry&gt;
      &lt;material name="black"/&gt;
    &lt;/visual&gt;
    &lt;collision&gt;
      &lt;geometry&gt;
        &lt;cylinder radius="0.1" length="0.05"/&gt;
      &lt;/geometry&gt;
    &lt;/collision&gt;
    &lt;inertial&gt;
      &lt;mass value="1"/&gt;
      &lt;inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.002"/&gt;
    &lt;/inertial&gt;
  &lt;/link&gt;

  <!-- Joints -->
  <joint name="front_wheel_joint" type="continuous">
    <parent link="base_link"/>
    <child link="front_wheel"/>
    <origin xyz="0.2 0 -0.1" rpy="1.5707 0 0"/>
    <axis xyz="0 1 0"/>
  </joint>

  <joint name="back_wheel_joint" type="continuous">
    <parent link="base_link"/>
    <child link="back_wheel"/>
    <origin xyz="-0.2 0 -0.1" rpy="1.5707 0 0"/>
    <axis xyz="0 1 0"/>
  </joint>

  <!-- Gazebo plugin for ROS control -->
  <gazebo>
    <plugin name="diff_drive" filename="libgazebo_ros_diff_drive.so">
      <commandTopic>/cmd_vel</commandTopic>
      <odometryTopic>/odom</odometryTopic>
      <odometryFrame>odom</odometryFrame>
      <robotBaseFrame>base_link</robotBaseFrame>
      <publishOdom>true</publishOdom>
      <publishWheelTF>false</publishWheelTF>
      <publishWheelJointState>true</publishWheelJointState>
      <legacyMode>false</legacyMode>
      <updateRate>30</updateRate>
      <leftJoint>front_wheel_joint</leftJoint>
      <rightJoint>back_wheel_joint</rightJoint>
      <wheelSeparation>0.5</wheelSeparation>
      <wheelDiameter>0.2</wheelDiameter>
    </plugin>
  </gazebo>

</robot>
```

To load this robot into Gazebo, you would typically use a launch file that spawns the robot model at startup.

## Creating Environments and Worlds

Creating custom environments is a key capability of Gazebo. You can define your own worlds with specific lighting, terrain, and objects.

### SDF World Files

World files in Gazebo are written in SDF format and define the complete simulation environment:

```xml
<?xml version="1.0" ?>
<sdf version="1.7">
  <world name="simple_world">
    <!-- Include a model from the database -->
    <include>
      <uri>model://ground_plane</uri>
    </include>

    <include>
      <uri>model://sun</uri>
    </include>

    <!-- Define a custom model -->
    <model name="wall">
      <pose>-1 0 0.5 0 0 0</pose>
      &lt;link name="wall_link"&gt;
        &lt;pose&gt;0 0 0.5 0 0 0&lt;/pose&gt;
        &lt;collision name="wall_collision"&gt;
          &lt;geometry&gt;
            &lt;box&gt;
              &lt;size&gt;0.1 2 1&lt;/size&gt;
            &lt;/box&gt;
          &lt;/geometry&gt;
        &lt;/collision&gt;
        &lt;visual name="wall_visual"&gt;
          &lt;geometry&gt;
            &lt;box&gt;
              &lt;size&gt;0.1 2 1&lt;/size&gt;
            &lt;/box&gt;
          &lt;/geometry&gt;
          &lt;material&gt;
            &lt;ambient&gt;0.8 0.8 0.8 1&lt;/ambient&gt;
            &lt;diffuse&gt;0.8 0.8 0.8 1&lt;/diffuse&gt;
            &lt;specular&gt;0.8 0.8 0.8 1&lt;/specular&gt;
          &lt;/material&gt;
        &lt;/visual&gt;
      &lt;/link&gt;
    </model>

    <!-- Lighting -->
    <light name='sun' type='directional'>
      <cast_shadows>true</cast_shadows>
      <pose>0 0 10 0 0 0</pose>
      <diffuse>0.8 0.8 0.8 1</diffuse>
      <specular>0.2 0.2 0.2 1</specular>
      <attenuation>
        <range>1000</range>
        <constant>0.9</constant>
        <linear>0.01</linear>
        <quadratic>0.001</quadratic>
      </attenuation>
      <direction>-0.0 0.0 -1</direction>
    </light>
  </world>
</sdf>
```

## Sensors in Gazebo

Gazebo provides a wide range of sensor types that emulate real-world sensors:

### Types of Sensors
- **Camera sensors**: RGB, depth, stereo cameras
- **LIDAR sensors**: 2D and 3D laser scanners
- **IMU sensors**: Inertial measurement units
- **Force/Torque sensors**: For measuring forces at joints
- **GPS sensors**: Global positioning system
- **Contact sensors**: Detect collisions between objects

### Example: Adding a Camera to Your Robot

```xml
<gazebo reference="camera_link">
  <sensor type="camera" name="camera1">
    <update_rate>30.0</update_rate>
    <camera name="head">
      <horizontal_fov>1.3962634</horizontal_fov>
      <image>
        <width>800</width>
        <height>800</height>
        <format>R8G8B8</format>
      </image>
      <clip>
        <near>0.02</near>
        <far>300</far>
      </clip>
    </camera>
    <plugin name="camera_controller" filename="libgazebo_ros_camera.so">
      <alwaysOn>true</alwaysOn>
      <updateRate>0.0</updateRate>
      <cameraName>simple_cam</cameraName>
      <imageTopicName>image_raw</imageTopicName>
      <cameraInfoTopicName>camera_info</cameraInfoTopicName>
      <frameName>camera_optical_frame</frameName>
      <hackBaseline>0.07</hackBaseline>
      <distortionK1>0.0</distortionK1>
      <distortionK2>0.0</distortionK2>
      <distortionK3>0.0</distortionK3>
      <distortionT1>0.0</distortionT1>
      <distortionT2>0.0</distortionT2>
    </plugin>
  </sensor>
</gazebo>
```

### Example: Adding a LIDAR Sensor

```xml
<gazebo reference="lidar_link">
  <sensor type="ray" name="lidar_sensor">
    <pose>0 0 0 0 0 0</pose>
    <visualize>true</visualize>
    <update_rate>10</update_rate>
    <ray>
      <scan>
        <horizontal>
          <samples>720</samples>
          <resolution>1</resolution>
          <min_angle>-1.570796</min_angle>
          <max_angle>1.570796</max_angle>
        </horizontal>
      </scan>
      <range>
        <min>0.10</min>
        <max>30.0</max>
        <resolution>0.01</resolution>
      </range>
    </ray>
    <plugin name="lidar_plugin" filename="libgazebo_ros_laser.so">
      <topicName>/scan</topicName>
      <frameName>lidar_link</frameName>
    </plugin>
  </sensor>
</gazebo>
```

## Physics Simulation in Gazebo

Understanding Gazebo's physics engine is crucial for creating realistic simulations:

### Physics Engine Options
- **ODE (Open Dynamics Engine)**: Default, good balance of speed and accuracy
- **Bullet**: Good for articulated bodies
- **SimBody**: From NASA, good for biomechanics
- **DART**: Dynamic Animation and Robotics Toolkit

### Physics Parameters

The physics engine configuration affects simulation realism and performance:

```xml
<physics type="ode">
  <max_step_size>0.001</max_step_size>
  <real_time_factor>1</real_time_factor>
  <real_time_update_rate>1000</real_time_update_rate>
  <gravity>0 0 -9.8</gravity>
</physics>
```

## Kinematics in Simulation

In addition to dynamics, Gazebo handles kinematic relationships between robot parts:

### Forward Kinematics
- Computes the position and orientation of the end-effector based on joint angles
- Implemented using plugins or custom controllers

### Inverse Kinematics
- Determines the joint angles needed to achieve a desired position
- Often handled by external packages like MoveIt!

## Hands-on Labs

### Lab 1: Spawn Your Robot

In this lab, you'll learn how to spawn your custom robot model in Gazebo.

#### Prerequisites
- ROS2 Humble
- Gazebo Classic installed
- Basic understanding of URDF from Module 1

#### Steps:

1. **Create a ROS2 package for your robot:**
   ```bash
   cd ~/ros2_ws/src
   ros2 pkg create --build-type ament_python gazebo_robot_pkg
   ```

2. **Create directories for your robot model:**
   ```bash
   mkdir -p ~/ros2_ws/src/gazebo_robot_pkg/models/simple_robot
   cd ~/ros2_ws/src/gazebo_robot_pkg/models/simple_robot
   ```

3. **Create the model.config file:**
   ```bash
   touch model.config
   ```

4. **Add the following to model.config:**
   ```xml
   <?xml version="1.0"?>
   <model>
     <name>simple_robot</name>
     <version>1.0</version>
     <sdf version="1.6">model.sdf</sdf>
     <author>
       <name>Your Name</name>
       <email>your.email@example.com</email>
     </author>
     <description>A simple mobile robot for Gazebo simulation.</description>
   </model>
   ```

5. **Create the model.sdf file:**
   ```bash
   touch model.sdf
   ```

6. **Add the following to model.sdf:**
   ```xml
   <?xml version="1.0" ?>
<sdf version="1.6">
  <model name="simple_robot">
    &lt;link name="chassis"&gt;
      &lt;inertial&gt;
        &lt;mass&gt;5.0&lt;/mass&gt;
        &lt;inertia&gt;
          &lt;ixx&gt;0.1&lt;/ixx&gt;
          &lt;ixy&gt;0.0&lt;/ixy&gt;
          &lt;ixz&gt;0.0&lt;/ixz&gt;
          &lt;iyy&gt;0.1&lt;/iyy&gt;
          &lt;iyz&gt;0.0&lt;/iyz&gt;
          &lt;izz&gt;0.1&lt;/izz&gt;
        &lt;/inertia&gt;
      &lt;/inertial&gt;

      &lt;collision name="collision"&gt;
        &lt;geometry&gt;
          &lt;box&gt;
            &lt;size&gt;0.5 0.3 0.1&lt;/size&gt;
          &lt;/box&gt;
        &lt;/geometry&gt;
      &lt;/collision&gt;

      &lt;visual name="visual"&gt;
        &lt;geometry&gt;
          &lt;box&gt;
            &lt;size&gt;0.5 0.3 0.1&lt;/size&gt;
          &lt;/box&gt;
        &lt;/geometry&gt;
        &lt;material&gt;
          &lt;ambient&gt;0.2 0.2 1.0 1.0&lt;/ambient&gt;
          &lt;diffuse&gt;0.2 0.2 1.0 1.0&lt;/diffuse&gt;
          &lt;specular&gt;0.2 0.2 1.0 1.0&lt;/specular&gt;
        &lt;/material&gt;
      &lt;/visual&gt;
    &lt;/link&gt;

    <plugin name="diff_drive" filename="libgazebo_ros_diff_drive.so">
      <left_joint>left_wheel_joint</left_joint>
      <right_joint>right_wheel_joint</right_joint>
      <wheel_separation>0.3</wheel_separation>
      <wheel_diameter>0.15</wheel_diameter>
      <command_topic>/cmd_vel</command_topic>
      <odometry_topic>/odom</odometry_topic>
      <odometry_frame>odom</odometry_frame>
      <robot_base_frame>chassis</robot_base_frame>
      <update_rate>30</update_rate>
    </plugin>
  </model>
</sdf>
   ```

7. **Set up the GAZEBO_MODEL_PATH environment variable:**
   ```bash
   echo 'export GAZEBO_MODEL_PATH=$GAZEBO_MODEL_PATH:~/ros2_ws/src/gazebo_robot_pkg/models' >> ~/.bashrc
   source ~/.bashrc
   ```

8. **Launch Gazebo and insert your robot:**
   ```bash
   gazebo
   ```

   In Gazebo, use the Insert tab to find and place your "simple_robot" model.

### Lab 2: Add Obstacles to Your Environment

In this lab, you'll learn to create and customize environments with obstacles to challenge your robot.

#### Steps:

1. **Create a new world file:**
   ```bash
   mkdir -p ~/ros2_ws/src/gazebo_robot_pkg/worlds
   touch ~/ros2_ws/src/gazebo_robot_pkg/worlds/simple_obstacle_course.world
   ```

2. **Add the following content to create a room with obstacles:**
```xml
<?xml version="1.0" ?>
<sdf version="1.7">
  <world name="simple_obstacle_course">
    <!-- Ground plane -->
    <include>
      <uri>model://ground_plane</uri>
    </include>

    <!-- Sun light source -->
    <include>
      <uri>model://sun</uri>
    </include>

    <!-- Walls forming a maze-like structure -->
    <model name='wall1'>
      <pose>-1 2 0 0 0 0</pose>
      &lt;link name='wall1_link'&gt;
        &lt;collision name='wall1_collision'&gt;
          &lt;geometry&gt;
            &lt;box&gt;&lt;size&gt;2 0.1 1&lt;/size&gt;&lt;/box&gt;
          &lt;/geometry&gt;
        &lt;/collision&gt;
        &lt;visual name='wall1_visual'&gt;
          &lt;geometry&gt;
            &lt;box&gt;&lt;size&gt;2 0.1 1&lt;/size&gt;&lt;/box&gt;
          &lt;/geometry&gt;
          &lt;material&gt;
            &lt;ambient&gt;0.5 0.5 0.5 1&lt;/ambient&gt;
            &lt;diffuse&gt;0.8 0.8 0.8 1&lt;/diffuse&gt;
          &lt;/material&gt;
        &lt;/visual&gt;
      &lt;/link&gt;
    </model>

    <model name='wall2'>
      <pose>1 0 0 0 0 0</pose>
      &lt;link name='wall2_link'&gt;
        &lt;collision name='wall2_collision'&gt;
          &lt;geometry&gt;
            &lt;box&gt;&lt;size&gt;0.1 2 1&lt;/size&gt;&lt;/box&gt;
          &lt;/geometry&gt;
        &lt;/collision&gt;
        &lt;visual name='wall2_visual'&gt;
          &lt;geometry&gt;
            &lt;box&gt;&lt;size&gt;0.1 2 1&lt;/size&gt;&lt;/box&gt;
          &lt;/geometry&gt;
          &lt;material&gt;
            &lt;ambient&gt;0.5 0.5 0.5 1&lt;/ambient&gt;
            &lt;diffuse&gt;0.8 0.8 0.8 1&lt;/diffuse&gt;
          &lt;/material&gt;
        &lt;/visual&gt;
      &lt;/link&gt;
    </model>

    <model name='obstacle1'>
      <pose>0 -1 0 0 0 0</pose>
      &lt;link name='obstacle1_link'&gt;
        &lt;collision name='obstacle1_collision'&gt;
          &lt;geometry&gt;
            &lt;sphere&gt;&lt;radius&gt;0.3&lt;/radius&gt;&lt;/sphere&gt;
          &lt;/geometry&gt;
        &lt;/collision&gt;
        &lt;visual name='obstacle1_visual'&gt;
          &lt;geometry&gt;
            &lt;sphere&gt;&lt;radius&gt;0.3&lt;/radius&gt;&lt;/sphere&gt;
          &lt;/geometry&gt;
          &lt;material&gt;
            &lt;ambient&gt;1 0 0 1&lt;/ambient&gt;
            &lt;diffuse&gt;1 0 0 1&lt;/diffuse&gt;
          &lt;/material&gt;
        &lt;/visual&gt;
      &lt;/link&gt;
    </model>

    <!-- Add your robot -->
    <include>
      <name>simple_robot</name>
      <pose>0 0 0.1 0 0 0</pose>
      <uri>model://simple_robot</uri>
    </include>
  </world>
</sdf>
```


3. **Launch Gazebo with your custom world:**
   ```bash
   gazebo ~/ros2_ws/src/gazebo_robot_pkg/worlds/simple_obstacle_course.world
   ```

4. **Alternative: Create a launch file to automate the process:**
   ```bash
   mkdir -p ~/ros2_ws/src/gazebo_robot_pkg/launch
   touch ~/ros2_ws/src/gazebo_robot_pkg/launch/spawn_robot.launch.py
   ```

5. **Add the following content to the launch file:**
   ```python
   import os
   from launch import LaunchDescription
   from launch.actions import ExecuteProcess
   from launch.actions import IncludeLaunchDescription
   from launch.launch_description_sources import PythonLaunchDescriptionSource
   from launch.substitutions import LaunchConfiguration
   from ament_index_python.packages import get_package_share_directory


   def generate_launch_description():
       package_dir = get_package_share_directory('gazebo_robot_pkg')

       # Launch Gazebo with custom world
       gazebo = ExecuteProcess(
           cmd=[
               'gazebo',
               '--verbose',
               '-s', 'libgazebo_ros_factory.so',
               '-s', 'libgazebo_ros_init.so',
               os.path.join(package_dir, 'worlds', 'simple_obstacle_course.world')
           ],
           output='screen'
       )

       return LaunchDescription([
           gazebo
       ])
   ```

6. **Build and run:**
   ```bash
   cd ~/ros2_ws
   colcon build --packages-select gazebo_robot_pkg
   source install/setup.bash
   ros2 launch gazebo_robot_pkg spawn_robot.launch.py
   ```

### Lab 3: Test Autonomous Navigation

In this lab, you'll implement a simple navigation algorithm to move your robot around the obstacle course.

#### Steps:

1. **Install navigation packages:**
   ```bash
   sudo apt update
   sudo apt install ros-humble-navigation2 ros-humble-nav2-bringup
   ```

2. **Create a navigation script:**
   ```bash
   mkdir -p ~/ros2_ws/src/gazebo_robot_pkg/gazebo_robot_pkg
   touch ~/ros2_ws/src/gazebo_robot_pkg/gazebo_robot_pkg/navigation_test.py
   ```

3. **Add the following content to navigation_test.py:**
   ```python
   #!/usr/bin/env python3

   import rclpy
   from rclpy.node import Node
   from geometry_msgs.msg import Twist
   from sensor_msgs.msg import LaserScan
   import math


   class SimpleNavigation(Node):
       def __init__(self):
           super().__init__('simple_navigation')

           # Publisher for velocity commands
           self.cmd_vel_pub = self.create_publisher(Twist, '/cmd_vel', 10)

           # Subscriber for laser scan data
           self.scan_sub = self.create_subscription(
               LaserScan,
               '/scan',
               self.scan_callback,
               10
           )

           # Timer for control loop
           self.timer = self.create_timer(0.1, self.control_loop)

           # Robot state
           self.obstacle_distance = float('inf')
           self.obstacle_angle = 0
           self.state = "FORWARD"  # FORWARD, TURN_LEFT, TURN_RIGHT
           self.state_timer = 0

       def scan_callback(self, msg):
           # Find the minimum distance in the front arc (90 degrees)
           front_range_start = len(msg.ranges) // 2 - 45
           front_range_end = len(msg.ranges) // 2 + 45

           min_distance = float('inf')
           min_index = 0

           for i in range(front_range_start, front_range_end):
               if i >= 0 and i < len(msg.ranges):
                   if not math.isnan(msg.ranges[i]) and msg.ranges[i] < min_distance:
                       min_distance = msg.ranges[i]
                       min_index = i

           self.obstacle_distance = min_distance
           self.obstacle_angle = msg.angle_min + min_index * msg.angle_increment

       def control_loop(self):
           twist = Twist()

           # Simple obstacle avoidance
           if self.obstacle_distance < 1.0:  # Obstacle within 1 meter
               if self.state == "FORWARD":
                   self.state = "TURN_LEFT"
                   self.state_timer = 50  # Turn for 5 seconds worth of callbacks

               if self.obstacle_angle > 0:  # Obstacle on the right, turn left
                   twist.linear.x = 0.0
                   twist.angular.z = 0.5
               else:  # Obstacle on the left, turn right
                   twist.linear.x = 0.0
                   twist.angular.z = -0.5
           else:
               # Move forward if no obstacles ahead
               self.state = "FORWARD"
               twist.linear.x = 0.5
               twist.angular.z = 0.0

           # Decrement timer if in turning state
           if self.state_timer > 0:
               self.state_timer -= 1
           elif self.state != "FORWARD":
               self.state = "FORWARD"

           self.cmd_vel_pub.publish(twist)


   def main(args=None):
       rclpy.init(args=args)
       nav_node = SimpleNavigation()

       try:
           rclpy.spin(nav_node)
       except KeyboardInterrupt:
           pass
       finally:
           nav_node.destroy_node()
           rclpy.shutdown()


   if __name__ == '__main__':
       main()
   ```

4. **Update setup.py to add the navigation executable:**
   Add the following to the entry_points section in setup.py:
   ```python
   entry_points={
       'console_scripts': [
           'navigation_test = gazebo_robot_pkg.navigation_test:main',
       ],
   },
   ```

5. **Build and run the navigation test:**
   ```bash
   cd ~/ros2_ws
   colcon build --packages-select gazebo_robot_pkg
   source install/setup.bash

   # Launch Gazebo with the world
   ros2 launch gazebo_robot_pkg spawn_robot.launch.py

   # In another terminal, run the navigation script
   ros2 run gazebo_robot_pkg navigation_test
   ```

## Custom Plugins in Gazebo

Advanced users can create custom plugins to add specific functionality to Gazebo:

### Types of Plugins
- **Model plugins**: Attach to specific models
- **World plugins**: Operate at the world level
- **Sensor plugins**: Process sensor data
- **System plugins**: Low-level system operations
- **GUI plugins**: Extend the graphical interface

### Example: Simple Model Plugin

Here's a simple C++ plugin that makes a model respond to a ROS service call:

**simple_model_plugin.cpp:**
```cpp
#include <gazebo/common/Plugin.hh>
#include <gazebo/physics/physics.hh>
#include <rclcpp/rclcpp.hpp>
#include <std_srvs/srv/trigger.hpp>

namespace gazebo
{
  class SimpleModelPlugin : public ModelPlugin
  {
    public: void Load(physics::ModelPtr _model, sdf::ElementPtr _sdf)
    {
      this->model = _model;

      // Initialize ROS
      if (!rclcpp::ok()) {
        rclcpp::init(0, nullptr);
        this->rosNode = rclcpp::Node::make_shared("simple_model_plugin");
      }

      // Create service
      this->service = this->rosNode->create_service<std_srvs::srv::Trigger>(
        "~/move_model",
        [this](const std::shared_ptr<std_srvs::srv::Trigger::Request> request,
               std::shared_ptr<std_srvs::srv::Trigger::Response> response) {
          this->MoveModel();
          response->success = true;
          response->message = "Model moved!";
        });

      // Start ROS spinner thread
      this->rosSpinnerThread = std::thread([this]() {
        rclcpp::spin(this->rosNode);
      });
    }

    private: void MoveModel()
    {
      math::Pose pose = this->model->GetWorldPose();
      pose.pos.x() += 1.0;  // Move 1m in x direction
      this->model->SetWorldPose(pose);
    }

    private: physics::ModelPtr model;
    private: rclcpp::Node::SharedPtr rosNode;
    private: rclcpp::Service<std_srvs::srv::Trigger>::SharedPtr service;
    private: std::thread rosSpinnerThread;
  };

  GZ_REGISTER_MODEL_PLUGIN(SimpleModelPlugin)
}
```

## Best Practices for Gazebo Simulation

1. **Performance Optimization:**
   - Use appropriate update rates for sensors
   - Simplify collision geometries when possible
   - Adjust physics step sizes based on your needs

2. **Realistic Simulation:**
   - Accurate inertial properties in URDF
   - Proper friction coefficients
   - Realistic sensor noise parameters

3. **Testing and Validation:**
   - Compare simulation results with theoretical models
   - Use simpler models to validate behavior first
   - Gradually add complexity

4. **Debugging:**
   - Use Gazebo's visualization tools
   - Monitor ROS topics during simulation
   - Log important values for analysis

## Summary

In this module, you've learned about Gazebo simulation, including:
- The differences between Gazebo Classic and Ignition
- How to import URDF robots into simulation
- Creating custom environments and worlds
- Working with various sensor types
- Understanding physics simulation in Gazebo
- Developing custom plugins for enhanced functionality

In the hands-on labs, you created a simple robot model, set up custom environments with obstacles, and implemented navigation algorithms to test your robot's capabilities. These skills are essential for developing and testing complex robotic systems before deploying them in the real world.