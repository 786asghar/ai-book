---
title: Module 1 - ROS2 Foundations
sidebar_position: 2
---

# Module 1 - ROS2 Foundations

## Introduction to ROS2

The Robot Operating System (ROS) is not actually an operating system, but rather a middleware framework that provides services designed for a heterogeneous computer cluster. ROS2 is the next generation of this framework, designed to address the limitations of the original ROS and to support commercial applications.

ROS has become the de facto standard for robotics software development, with a vast ecosystem of tools, libraries, and conventions that make it easier to develop complex robotic applications. ROS2 introduces several improvements over the original ROS, including:

- Real-time support
- Improved security
- Better cross-platform compatibility
- Quality of Service (QoS) policies for reliable communication
- Support for multiple DDS (Data Distribution Service) implementations

## What is ROS2?

ROS2 extends the original ROS concepts with additional features to support production robotics applications. Key enhancements in ROS2 include:

- **Distributed Systems**: ROS2 supports multiple machines and real-time systems.
- **Quality of Service (QoS)**: Policies that allow fine-tuning of communication behavior between nodes.
- **Security**: Built-in security features for authentication, access control, and encryption.
- **Multiple DDS Implementations**: Support for different DDS vendors and implementations.
- **Lifecycle Management**: Better support for long-running systems with defined node lifecycles.

## Core Concepts in ROS2

### Nodes, Topics, Services

#### Nodes
In ROS2, a node is a process that performs computation. Nodes are the fundamental building blocks of ROS programs. In ROS2, nodes are designed to be more robust and suitable for production systems.

```cpp
// Example of a simple ROS2 node in C++
#include "rclcpp/rclcpp.hpp"

class MinimalNode : public rclcpp::Node
{
public:
    MinimalNode() : Node("minimal_node") {
        RCLCPP_INFO(this->get_logger(), "Hello, ROS2!");
    }
};

int main(int argc, char * argv[])
{
    rclcpp::init(argc, argv);
    rclcpp::spin(std::make_shared<MinimalNode>());
    rclcpp::shutdown();
    return 0;
}
```

#### Topics
Topics are named buses over which nodes exchange messages. Publishers send messages to a topic and subscribers receive messages from a topic. This enables a loosely-coupled communication system where publishers and subscribers don't need to know about each other.

```python
# Python example: Publisher
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello World: %d' % self.i
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

#### Services
Services provide a request/response communication mechanism. Unlike topics, services are synchronous and block execution until a response is received.

```python
# Python example: Service Server
import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts

class MinimalService(Node):
    def __init__(self):
        super().__init__('minimal_service')
        self.srv = self.create_service(AddTwoInts, 'add_two_ints', self.add_two_ints_callback)

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info('Incoming request\na: %d b: %d' % (request.a, request.b))
        return response

def main(args=None):
    rclpy.init(args=args)
    minimal_service = MinimalService()
    rclpy.spin(minimal_service)
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

### Publisher/Subscriber System

The publish-subscribe pattern is fundamental to ROS2 communication. Publishers send messages to a topic without knowing who, if anyone, is listening. Subscribers receive messages from a topic without knowing who sent them.

This decoupled communication allows for:
- Scalability: Multiple publishers and subscribers can use the same topic
- Flexibility: Components can be added or removed without affecting others
- Robustness: Failure of one component doesn't bring down the entire system

### TF Transformations

TF (Transforms) is a package in ROS2 that keeps track of multiple coordinate frames over time. It helps answer questions like "Where is my robot's gripper relative to the base?" or "What point in the world corresponds to a pixel in my camera image?"

The TF2 system:
- Maintains a tree of coordinate frame transforms
- Provides interpolation between transforms
- Handles coordinate frame conversions
- Manages the lifecycle of transforms

```python
# Example: Using TF2 in Python
import rclpy
from rclpy.node import Node
from tf2_ros import TransformBroadcaster
from geometry_msgs.msg import TransformStamped

class FramePublisher(Node):
    def __init__(self):
        super().__init__('frame_publisher')
        self.tf_broadcaster = TransformBroadcaster(self)
        self.timer = self.create_timer(0.1, self.broadcast_transform)

    def broadcast_transform(self):
        t = TransformStamped()

        t.header.stamp = self.get_clock().now().to_msg()
        t.header.frame_id = 'robot_base'
        t.child_frame_id = 'laser_frame'

        t.transform.translation.x = 0.1
        t.transform.translation.y = 0.0
        t.transform.translation.z = 0.2
        t.transform.rotation.x = 0.0
        t.transform.rotation.y = 0.0
        t.transform.rotation.z = 0.0
        t.transform.rotation.w = 1.0

        self.tf_broadcaster.sendTransform(t)

def main():
    rclpy.init()
    node = FramePublisher()
    try:
        rclpy.spin(node)
    except KeyboardInterrupt:
        pass
    finally:
        node.destroy_node()
        rclpy.shutdown()
```

### URDF Robot Models

URDF (Unified Robot Description Format) is an XML format used to describe robots in ROS2. It contains information about the robot's physical and visual properties, including:

- Links: Rigid parts of the robot
- Joints: Connections between links
- Visual: How the robot looks in simulation
- Collision: Physical collision properties
- Inertial: Mass and inertia properties

```xml
<?xml version="1.0"?>
<robot name="simple_robot">
  <!-- Base Link -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="0.5 0.5 0.2"/>
      </geometry>
      <material name="blue">
        <color rgba="0 0 1 0.8"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <box size="0.5 0.5 0.2"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="1"/>
      <inertia ixx="0.083" ixy="0" ixz="0" iyy="0.083" iyz="0" izz="0.167"/>
    </inertial>
  </link>

  <!-- Wheel joints and links -->
  <joint name="wheel_left_joint" type="continuous">
    <parent link="base_link"/>
    <child link="wheel_left"/>
    <origin xyz="-0.15 -0.25 0" rpy="0 0 0"/>
    <axis xyz="0 1 0"/>
  </joint>

  <link name="wheel_left">
    <visual>
      <geometry>
        <cylinder radius="0.1" length="0.05"/>
      </geometry>
      <material name="black">
        <color rgba="0 0 0 1"/>
      </material>
    </visual>
  </link>
</robot>
```

### ROS2 Navigation Stack

The ROS2 Navigation stack provides the capabilities required to move a robot autonomously. It includes:

- **Localization**: Determining the robot's position in a map
- **Mapping**: Creating a map of the environment
- **Path Planning**: Finding a path from start to goal
- **Path Following**: Controlling the robot to follow the planned path

## Hands-on Labs

### Lab 1: Build Your First ROS2 Package

In this lab, you will create your first ROS2 package and run a simple publisher-subscriber system.

#### Prerequisites
- ROS2 Humble installed
- Basic knowledge of terminal commands
- Python or C++ knowledge

#### Steps:

1. **Create a new workspace and package:**
   ```bash
   mkdir -p ~/ros2_ws/src
   cd ~/ros2_ws/src
   ros2 pkg create --build-type ament_python my_first_package
   ```

2. **Navigate to the package directory:**
   ```bash
   cd my_first_package
   ```

3. **Create the publisher node:**
   ```bash
   mkdir my_first_package
   touch my_first_package/publisher_member_function.py
   ```

4. **Add the following code to `my_first_package/publisher_member_function.py`:**
   ```python
   import rclpy
   from rclpy.node import Node
   from std_msgs.msg import String

   class MinimalPublisher(Node):
       def __init__(self):
           super().__init__('minimal_publisher')
           self.publisher_ = self.create_publisher(String, 'topic', 10)
           timer_period = 0.5  # seconds
           self.timer = self.create_timer(timer_period, self.timer_callback)
           self.i = 0

       def timer_callback(self):
           msg = String()
           msg.data = 'Hello World: %d' % self.i
           self.publisher_.publish(msg)
           self.get_logger().info('Publishing: "%s"' % msg.data)
           self.i += 1

   def main(args=None):
       rclpy.init(args=args)
       minimal_publisher = MinimalPublisher()
       rclpy.spin(minimal_publisher)
       minimal_publisher.destroy_node()
       rclpy.shutdown()

   if __name__ == '__main__':
       main()
   ```

5. **Create the subscriber node:**
   ```bash
   touch my_first_package/subscriber_member_function.py
   ```

6. **Add the following code to `my_first_package/subscriber_member_function.py`:**
   ```python
   import rclpy
   from rclpy.node import Node
   from std_msgs.msg import String

   class MinimalSubscriber(Node):
       def __init__(self):
           super().__init__('minimal_subscriber')
           self.subscription = self.create_subscription(
               String,
               'topic',
               self.listener_callback,
               10)
           self.subscription  # prevent unused variable warning

       def listener_callback(self, msg):
           self.get_logger().info('I heard: "%s"' % msg.data)

   def main(args=None):
       rclpy.init(args=args)
       minimal_subscriber = MinimalSubscriber()
       rclpy.spin(minimal_subscriber)
       minimal_subscriber.destroy_node()
       rclpy.shutdown()

   if __name__ == '__main__':
       main()
   ```

7. **Modify the setup.py file:**
   Update the entry_points section in `setup.py`:
   ```python
   entry_points={
       'console_scripts': [
           'talker = my_first_package.publisher_member_function:main',
           'listener = my_first_package.subscriber_member_function:main',
       ],
   },
   ```

8. **Build the package:**
   ```bash
   cd ~/ros2_ws
   colcon build --packages-select my_first_package
   ```

9. **Source the workspace:**
   ```bash
   source install/setup.bash
   ```

10. **Run the publisher:**
    ```bash
    ros2 run my_first_package talker
    ```

11. **In a new terminal, run the subscriber:**
    ```bash
    ros2 run my_first_package listener
    ```

Congratulations! You've created your first ROS2 package with a publisher-subscriber system.

### Lab 2: Publish Movement Commands

In this lab, you will publish movement commands to control a simulated robot.

#### Steps:

1. **Create a publisher that sends Twist messages:**
   ```bash
   touch my_first_package/move_robot.py
   ```

2. **Add the following code to `my_first_package/move_robot.py`:**
   ```python
   import rclpy
   from rclpy.node import Node
   from geometry_msgs.msg import Twist

   class RobotMover(Node):
       def __init__(self):
           super().__init__('robot_mover')
           self.publisher_ = self.create_publisher(Twist, '/cmd_vel', 10)
           timer_period = 0.1  # seconds
           self.timer = self.create_timer(timer_period, self.move_callback)
           self.i = 0

       def move_callback(self):
           msg = Twist()
           # Move forward and rotate slowly
           msg.linear.x = 0.2
           msg.angular.z = 0.1
           self.publisher_.publish(msg)
           self.get_logger().info(f'Publishing linear: {msg.linear.x}, angular: {msg.angular.z}')

   def main(args=None):
       rclpy.init(args=args)
       robot_mover = RobotMover()
       rclpy.spin(robot_mover)
       robot_mover.destroy_node()
       rclpy.shutdown()

   if __name__ == '__main__':
       main()
   ```

3. **Update setup.py to add the new executable:**
   ```python
   entry_points={
       'console_scripts': [
           'talker = my_first_package.publisher_member_function:main',
           'listener = my_first_package.subscriber_member_function:main',
           'move_robot = my_first_package.move_robot:main',
       ],
   },
   ```

4. **Rebuild the package:**
   ```bash
   cd ~/ros2_ws
   colcon build --packages-select my_first_package
   source install/setup.bash
   ```

5. **Run the movement publisher:**
   ```bash
   ros2 run my_first_package move_robot
   ```

### Lab 3: Control a Mobile Robot

In this lab, you will create a more sophisticated control system for a mobile robot.

#### Steps:

1. **Create a robot controller that responds to keyboard input:**
   ```bash
   touch my_first_package/keyboard_control.py
   ```

2. **Add the following code to `my_first_package/keyboard_control.py`:**
   ```python
   import rclpy
   from rclpy.node import Node
   from geometry_msgs.msg import Twist
   import sys, select, termios, tty

   msg = """
   Control Your Robot!
   ---------------------------
   Moving around:
      u    i    o
      j    k    l
      m    ,    .

   q/z : increase/decrease max speeds by 10%
   w/x : increase/decrease only linear speed by 10%
   e/c : increase/decrease only angular speed by 10%
   space key, k : force stop
   anything else : stop smoothly

   CTRL-C to quit
   """

   moveBindings = {
       'i': (1, 0),
       'o': (1, -1),
       'j': (0, 1),
       'l': (0, -1),
       'u': (1, 1),
       ',': (-1, 0),
       '.': (-1, 1),
       'm': (-1, -1),
   }

   speedBindings = {
       'q': (1.1, 1.1),
       'z': (.9, .9),
       'w': (1.1, 1),
       'x': (.9, 1),
       'e': (1, 1.1),
       'c': (1, .9),
   }

   class TeleopRobot(Node):
       def __init__(self):
           super().__init__('teleop_robot')
           self.publisher_ = self.create_publisher(Twist, '/cmd_vel', 10)

           self.speed = 0.5
           self.turn = 1.0
           self.x = 0.0
           self.y = 0.0
           self.z = 0.0
           self.th = 0.0
           self.status = 0

       def getKey(self):
           tty.setraw(sys.stdin.fileno())
           rlist, _, _ = select.select([sys.stdin], [], [], 0.1)
           if rlist:
               key = sys.stdin.read(1)
           else:
               key = ''

           termios.tcsetattr(sys.stdin, termios.TCSADRAIN, self.settings)
           return key

       def vels(self, speed, turn):
           return f"currently:\tspeed {speed}\tturn {turn}"

       def run(self):
           self.settings = termios.tcgetattr(sys.stdin)

           self.get_logger().info(msg)
           self.get_logger().info(self.vels(self.speed, self.turn))

           try:
               while True:
                   key = self.getKey()
                   if key in moveBindings.keys():
                       self.x = moveBindings[key][0]
                       self.th = moveBindings[key][1]
                   elif key in speedBindings.keys():
                       self.speed = self.speed * speedBindings[key][0]
                       self.turn = self.turn * speedBindings[key][1]

                       self.get_logger().info(self.vels(self.speed, self.turn))
                       if (self.status == 14):
                           self.get_logger().info(msg)
                       self.status = (self.status + 1) % 15
                   elif key == ' ' or key == 'k':
                       self.x = 0.0
                       self.y = 0.0
                       self.z = 0.0
                       self.th = 0.0
                   else:
                       self.x = 0.0
                       self.y = 0.0
                       self.z = 0.0
                       self.th = 0.0
                       if (key == '\x03'):
                           break

                   twist = Twist()
                   twist.linear.x = self.x * self.speed
                   twist.linear.y = self.y * self.speed
                   twist.linear.z = self.z * self.speed
                   twist.angular.x = 0.0
                   twist.angular.y = 0.0
                   twist.angular.z = self.th * self.turn
                   self.publisher_.publish(twist)

           except Exception as e:
               self.get_logger().error(f'Exception: {e}')

           finally:
               twist = Twist()
               twist.linear.x = 0.0
               twist.linear.y = 0.0
               twist.linear.z = 0.0
               twist.angular.x = 0.0
               twist.angular.y = 0.0
               twist.angular.z = 0.0
               self.publisher_.publish(twist)

               termios.tcsetattr(sys.stdin, termios.TCSADRAIN, self.settings)

   def main(args=None):
       rclpy.init(args=args)
       teleop_robot = TeleopRobot()

       try:
           teleop_robot.run()
       except KeyboardInterrupt:
           pass
       finally:
           teleop_robot.destroy_node()
           rclpy.shutdown()

   if __name__ == '__main__':
       main()
   ```

3. **Update setup.py to add the keyboard control executable:**
   ```python
   entry_points={
       'console_scripts': [
           'talker = my_first_package.publisher_member_function:main',
           'listener = my_first_package.subscriber_member_function:main',
           'move_robot = my_first_package.move_robot:main',
           'keyboard_control = my_first_package.keyboard_control:main',
       ],
   },
   ```

4. **Rebuild and run:**
   ```bash
   cd ~/ros2_ws
   colcon build --packages-select my_first_package
   source install/setup.bash
   ros2 run my_first_package keyboard_control
   ```

## Summary

In this module, you've learned the fundamentals of ROS2, including:
- The core concepts of nodes, topics, and services
- The publish-subscriber communication pattern
- TF transformations for coordinate management
- URDF for robot modeling
- The ROS2 Navigation Stack

In the hands-on labs, you created your first ROS2 package, implemented publisher and subscriber nodes, and developed a keyboard control system for robot movement. These foundational skills will serve as the building block for your journey into more advanced robotics concepts in the upcoming modules.