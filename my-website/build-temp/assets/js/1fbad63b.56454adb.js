"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[4688],{

/***/ 6011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_1_ros_2_md_1fb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-1-ros-2-md-1fb.json
const site_docs_module_1_ros_2_md_1fb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-1-ros2","title":"Module 1 - ROS2 Foundations","description":"Introduction to ROS2","source":"@site/docs/module-1-ros2.md","sourceDirName":".","slug":"/module-1-ros2","permalink":"/docs/module-1-ros2","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/module-1-ros2.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Module 1 - ROS2 Foundations","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Physical AI & Robotics Bootcamp","permalink":"/docs/intro"},"next":{"title":"Module 2 - Gazebo Simulation","permalink":"/docs/module-2-digital-twin/gazebo-simulation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-1-ros2.md


const frontMatter = {
	title: 'Module 1 - ROS2 Foundations',
	sidebar_position: 2
};
const contentTitle = 'Module 1 - ROS2 Foundations';

const assets = {

};



const toc = [{
  "value": "Introduction to ROS2",
  "id": "introduction-to-ros2",
  "level": 2
}, {
  "value": "What is ROS2?",
  "id": "what-is-ros2",
  "level": 2
}, {
  "value": "Core Concepts in ROS2",
  "id": "core-concepts-in-ros2",
  "level": 2
}, {
  "value": "Nodes, Topics, Services",
  "id": "nodes-topics-services",
  "level": 3
}, {
  "value": "Nodes",
  "id": "nodes",
  "level": 4
}, {
  "value": "Topics",
  "id": "topics",
  "level": 4
}, {
  "value": "Services",
  "id": "services",
  "level": 4
}, {
  "value": "Publisher/Subscriber System",
  "id": "publishersubscriber-system",
  "level": 3
}, {
  "value": "TF Transformations",
  "id": "tf-transformations",
  "level": 3
}, {
  "value": "URDF Robot Models",
  "id": "urdf-robot-models",
  "level": 3
}, {
  "value": "ROS2 Navigation Stack",
  "id": "ros2-navigation-stack",
  "level": 3
}, {
  "value": "Hands-on Labs",
  "id": "hands-on-labs",
  "level": 2
}, {
  "value": "Lab 1: Build Your First ROS2 Package",
  "id": "lab-1-build-your-first-ros2-package",
  "level": 3
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 4
}, {
  "value": "Steps:",
  "id": "steps",
  "level": 4
}, {
  "value": "Lab 2: Publish Movement Commands",
  "id": "lab-2-publish-movement-commands",
  "level": 3
}, {
  "value": "Steps:",
  "id": "steps-1",
  "level": 4
}, {
  "value": "Lab 3: Control a Mobile Robot",
  "id": "lab-3-control-a-mobile-robot",
  "level": 3
}, {
  "value": "Steps:",
  "id": "steps-2",
  "level": 4
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "module-1---ros2-foundations",
        children: "Module 1 - ROS2 Foundations"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction-to-ros2",
      children: "Introduction to ROS2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Robot Operating System (ROS) is not actually an operating system, but rather a middleware framework that provides services designed for a heterogeneous computer cluster. ROS2 is the next generation of this framework, designed to address the limitations of the original ROS and to support commercial applications."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ROS has become the de facto standard for robotics software development, with a vast ecosystem of tools, libraries, and conventions that make it easier to develop complex robotic applications. ROS2 introduces several improvements over the original ROS, including:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time support"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improved security"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Better cross-platform compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quality of Service (QoS) policies for reliable communication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support for multiple DDS (Data Distribution Service) implementations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-is-ros2",
      children: "What is ROS2?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ROS2 extends the original ROS concepts with additional features to support production robotics applications. Key enhancements in ROS2 include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distributed Systems"
        }), ": ROS2 supports multiple machines and real-time systems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality of Service (QoS)"
        }), ": Policies that allow fine-tuning of communication behavior between nodes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security"
        }), ": Built-in security features for authentication, access control, and encryption."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple DDS Implementations"
        }), ": Support for different DDS vendors and implementations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lifecycle Management"
        }), ": Better support for long-running systems with defined node lifecycles."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "core-concepts-in-ros2",
      children: "Core Concepts in ROS2"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nodes-topics-services",
      children: "Nodes, Topics, Services"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nodes",
      children: "Nodes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In ROS2, a node is a process that performs computation. Nodes are the fundamental building blocks of ROS programs. In ROS2, nodes are designed to be more robust and suitable for production systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Example of a simple ROS2 node in C++\n#include \"rclcpp/rclcpp.hpp\"\n\nclass MinimalNode : public rclcpp::Node\n{\npublic:\n    MinimalNode() : Node(\"minimal_node\") {\n        RCLCPP_INFO(this->get_logger(), \"Hello, ROS2!\");\n    }\n};\n\nint main(int argc, char * argv[])\n{\n    rclcpp::init(argc, argv);\n    rclcpp::spin(std::make_shared<MinimalNode>());\n    rclcpp::shutdown();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "topics",
      children: "Topics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Topics are named buses over which nodes exchange messages. Publishers send messages to a topic and subscribers receive messages from a topic. This enables a loosely-coupled communication system where publishers and subscribers don't need to know about each other."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python example: Publisher\nimport rclpy\nfrom rclpy.node import Node\nfrom std_msgs.msg import String\n\nclass MinimalPublisher(Node):\n    def __init__(self):\n        super().__init__('minimal_publisher')\n        self.publisher_ = self.create_publisher(String, 'topic', 10)\n        timer_period = 0.5  # seconds\n        self.timer = self.create_timer(timer_period, self.timer_callback)\n        self.i = 0\n\n    def timer_callback(self):\n        msg = String()\n        msg.data = 'Hello World: %d' % self.i\n        self.publisher_.publish(msg)\n        self.get_logger().info('Publishing: \"%s\"' % msg.data)\n        self.i += 1\n\ndef main(args=None):\n    rclpy.init(args=args)\n    minimal_publisher = MinimalPublisher()\n    rclpy.spin(minimal_publisher)\n    minimal_publisher.destroy_node()\n    rclpy.shutdown()\n\nif __name__ == '__main__':\n    main()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "services",
      children: "Services"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Services provide a request/response communication mechanism. Unlike topics, services are synchronous and block execution until a response is received."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python example: Service Server\nimport rclpy\nfrom rclpy.node import Node\nfrom example_interfaces.srv import AddTwoInts\n\nclass MinimalService(Node):\n    def __init__(self):\n        super().__init__('minimal_service')\n        self.srv = self.create_service(AddTwoInts, 'add_two_ints', self.add_two_ints_callback)\n\n    def add_two_ints_callback(self, request, response):\n        response.sum = request.a + request.b\n        self.get_logger().info('Incoming request\\na: %d b: %d' % (request.a, request.b))\n        return response\n\ndef main(args=None):\n    rclpy.init(args=args)\n    minimal_service = MinimalService()\n    rclpy.spin(minimal_service)\n    rclpy.shutdown()\n\nif __name__ == '__main__':\n    main()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "publishersubscriber-system",
      children: "Publisher/Subscriber System"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The publish-subscribe pattern is fundamental to ROS2 communication. Publishers send messages to a topic without knowing who, if anyone, is listening. Subscribers receive messages from a topic without knowing who sent them."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This decoupled communication allows for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scalability: Multiple publishers and subscribers can use the same topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flexibility: Components can be added or removed without affecting others"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Robustness: Failure of one component doesn't bring down the entire system"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tf-transformations",
      children: "TF Transformations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TF (Transforms) is a package in ROS2 that keeps track of multiple coordinate frames over time. It helps answer questions like \"Where is my robot's gripper relative to the base?\" or \"What point in the world corresponds to a pixel in my camera image?\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The TF2 system:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintains a tree of coordinate frame transforms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides interpolation between transforms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles coordinate frame conversions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manages the lifecycle of transforms"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Example: Using TF2 in Python\nimport rclpy\nfrom rclpy.node import Node\nfrom tf2_ros import TransformBroadcaster\nfrom geometry_msgs.msg import TransformStamped\n\nclass FramePublisher(Node):\n    def __init__(self):\n        super().__init__('frame_publisher')\n        self.tf_broadcaster = TransformBroadcaster(self)\n        self.timer = self.create_timer(0.1, self.broadcast_transform)\n\n    def broadcast_transform(self):\n        t = TransformStamped()\n\n        t.header.stamp = self.get_clock().now().to_msg()\n        t.header.frame_id = 'robot_base'\n        t.child_frame_id = 'laser_frame'\n\n        t.transform.translation.x = 0.1\n        t.transform.translation.y = 0.0\n        t.transform.translation.z = 0.2\n        t.transform.rotation.x = 0.0\n        t.transform.rotation.y = 0.0\n        t.transform.rotation.z = 0.0\n        t.transform.rotation.w = 1.0\n\n        self.tf_broadcaster.sendTransform(t)\n\ndef main():\n    rclpy.init()\n    node = FramePublisher()\n    try:\n        rclpy.spin(node)\n    except KeyboardInterrupt:\n        pass\n    finally:\n        node.destroy_node()\n        rclpy.shutdown()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "urdf-robot-models",
      children: "URDF Robot Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URDF (Unified Robot Description Format) is an XML format used to describe robots in ROS2. It contains information about the robot's physical and visual properties, including:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Links: Rigid parts of the robot"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Joints: Connections between links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Visual: How the robot looks in simulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collision: Physical collision properties"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inertial: Mass and inertia properties"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\"?>\n<robot name=\"simple_robot\">\n  <!-- Base Link -->\n  <link name=\"base_link\">\n    <visual>\n      <geometry>\n        <box size=\"0.5 0.5 0.2\"/>\n      </geometry>\n      <material name=\"blue\">\n        <color rgba=\"0 0 1 0.8\"/>\n      </material>\n    </visual>\n    <collision>\n      <geometry>\n        <box size=\"0.5 0.5 0.2\"/>\n      </geometry>\n    </collision>\n    <inertial>\n      <mass value=\"1\"/>\n      <inertia ixx=\"0.083\" ixy=\"0\" ixz=\"0\" iyy=\"0.083\" iyz=\"0\" izz=\"0.167\"/>\n    </inertial>\n  </link>\n\n  <!-- Wheel joints and links -->\n  <joint name=\"wheel_left_joint\" type=\"continuous\">\n    <parent link=\"base_link\"/>\n    <child link=\"wheel_left\"/>\n    <origin xyz=\"-0.15 -0.25 0\" rpy=\"0 0 0\"/>\n    <axis xyz=\"0 1 0\"/>\n  </joint>\n\n  <link name=\"wheel_left\">\n    <visual>\n      <geometry>\n        <cylinder radius=\"0.1\" length=\"0.05\"/>\n      </geometry>\n      <material name=\"black\">\n        <color rgba=\"0 0 0 1\"/>\n      </material>\n    </visual>\n  </link>\n</robot>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ros2-navigation-stack",
      children: "ROS2 Navigation Stack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The ROS2 Navigation stack provides the capabilities required to move a robot autonomously. It includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Localization"
        }), ": Determining the robot's position in a map"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mapping"
        }), ": Creating a map of the environment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Path Planning"
        }), ": Finding a path from start to goal"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Path Following"
        }), ": Controlling the robot to follow the planned path"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hands-on-labs",
      children: "Hands-on Labs"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lab-1-build-your-first-ros2-package",
      children: "Lab 1: Build Your First ROS2 Package"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this lab, you will create your first ROS2 package and run a simple publisher-subscriber system."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ROS2 Humble installed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic knowledge of terminal commands"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python or C++ knowledge"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "steps",
      children: "Steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create a new workspace and package:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "mkdir -p ~/ros2_ws/src\ncd ~/ros2_ws/src\nros2 pkg create --build-type ament_python my_first_package\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Navigate to the package directory:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "cd my_first_package\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create the publisher node:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "mkdir my_first_package\ntouch my_first_package/publisher_member_function.py\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Add the following code to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "my_first_package/publisher_member_function.py"
            }), ":"]
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "import rclpy\nfrom rclpy.node import Node\nfrom std_msgs.msg import String\n\nclass MinimalPublisher(Node):\n    def __init__(self):\n        super().__init__('minimal_publisher')\n        self.publisher_ = self.create_publisher(String, 'topic', 10)\n        timer_period = 0.5  # seconds\n        self.timer = self.create_timer(timer_period, self.timer_callback)\n        self.i = 0\n\n    def timer_callback(self):\n        msg = String()\n        msg.data = 'Hello World: %d' % self.i\n        self.publisher_.publish(msg)\n        self.get_logger().info('Publishing: \"%s\"' % msg.data)\n        self.i += 1\n\ndef main(args=None):\n    rclpy.init(args=args)\n    minimal_publisher = MinimalPublisher()\n    rclpy.spin(minimal_publisher)\n    minimal_publisher.destroy_node()\n    rclpy.shutdown()\n\nif __name__ == '__main__':\n    main()\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create the subscriber node:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "touch my_first_package/subscriber_member_function.py\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Add the following code to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "my_first_package/subscriber_member_function.py"
            }), ":"]
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "import rclpy\nfrom rclpy.node import Node\nfrom std_msgs.msg import String\n\nclass MinimalSubscriber(Node):\n    def __init__(self):\n        super().__init__('minimal_subscriber')\n        self.subscription = self.create_subscription(\n            String,\n            'topic',\n            self.listener_callback,\n            10)\n        self.subscription  # prevent unused variable warning\n\n    def listener_callback(self, msg):\n        self.get_logger().info('I heard: \"%s\"' % msg.data)\n\ndef main(args=None):\n    rclpy.init(args=args)\n    minimal_subscriber = MinimalSubscriber()\n    rclpy.spin(minimal_subscriber)\n    minimal_subscriber.destroy_node()\n    rclpy.shutdown()\n\nif __name__ == '__main__':\n    main()\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Modify the setup.py file:"
          }), "\nUpdate the entry_points section in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "setup.py"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "entry_points={\n    'console_scripts': [\n        'talker = my_first_package.publisher_member_function:main',\n        'listener = my_first_package.subscriber_member_function:main',\n    ],\n},\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Build the package:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "cd ~/ros2_ws\ncolcon build --packages-select my_first_package\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Source the workspace:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "source install/setup.bash\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Run the publisher:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "ros2 run my_first_package talker\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "In a new terminal, run the subscriber:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "ros2 run my_first_package listener\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Congratulations! You've created your first ROS2 package with a publisher-subscriber system."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lab-2-publish-movement-commands",
      children: "Lab 2: Publish Movement Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this lab, you will publish movement commands to control a simulated robot."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "steps-1",
      children: "Steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create a publisher that sends Twist messages:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "touch my_first_package/move_robot.py\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Add the following code to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "my_first_package/move_robot.py"
            }), ":"]
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "import rclpy\nfrom rclpy.node import Node\nfrom geometry_msgs.msg import Twist\n\nclass RobotMover(Node):\n    def __init__(self):\n        super().__init__('robot_mover')\n        self.publisher_ = self.create_publisher(Twist, '/cmd_vel', 10)\n        timer_period = 0.1  # seconds\n        self.timer = self.create_timer(timer_period, self.move_callback)\n        self.i = 0\n\n    def move_callback(self):\n        msg = Twist()\n        # Move forward and rotate slowly\n        msg.linear.x = 0.2\n        msg.angular.z = 0.1\n        self.publisher_.publish(msg)\n        self.get_logger().info(f'Publishing linear: {msg.linear.x}, angular: {msg.angular.z}')\n\ndef main(args=None):\n    rclpy.init(args=args)\n    robot_mover = RobotMover()\n    rclpy.spin(robot_mover)\n    robot_mover.destroy_node()\n    rclpy.shutdown()\n\nif __name__ == '__main__':\n    main()\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update setup.py to add the new executable:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "entry_points={\n    'console_scripts': [\n        'talker = my_first_package.publisher_member_function:main',\n        'listener = my_first_package.subscriber_member_function:main',\n        'move_robot = my_first_package.move_robot:main',\n    ],\n},\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Rebuild the package:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "cd ~/ros2_ws\ncolcon build --packages-select my_first_package\nsource install/setup.bash\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Run the movement publisher:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "ros2 run my_first_package move_robot\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lab-3-control-a-mobile-robot",
      children: "Lab 3: Control a Mobile Robot"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this lab, you will create a more sophisticated control system for a mobile robot."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "steps-2",
      children: "Steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create a robot controller that responds to keyboard input:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "touch my_first_package/keyboard_control.py\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Add the following code to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "my_first_package/keyboard_control.py"
            }), ":"]
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "import rclpy\nfrom rclpy.node import Node\nfrom geometry_msgs.msg import Twist\nimport sys, select, termios, tty\n\nmsg = \"\"\"\nControl Your Robot!\n---------------------------\nMoving around:\n   u    i    o\n   j    k    l\n   m    ,    .\n\nq/z : increase/decrease max speeds by 10%\nw/x : increase/decrease only linear speed by 10%\ne/c : increase/decrease only angular speed by 10%\nspace key, k : force stop\nanything else : stop smoothly\n\nCTRL-C to quit\n\"\"\"\n\nmoveBindings = {\n    'i': (1, 0),\n    'o': (1, -1),\n    'j': (0, 1),\n    'l': (0, -1),\n    'u': (1, 1),\n    ',': (-1, 0),\n    '.': (-1, 1),\n    'm': (-1, -1),\n}\n\nspeedBindings = {\n    'q': (1.1, 1.1),\n    'z': (.9, .9),\n    'w': (1.1, 1),\n    'x': (.9, 1),\n    'e': (1, 1.1),\n    'c': (1, .9),\n}\n\nclass TeleopRobot(Node):\n    def __init__(self):\n        super().__init__('teleop_robot')\n        self.publisher_ = self.create_publisher(Twist, '/cmd_vel', 10)\n        \n        self.speed = 0.5\n        self.turn = 1.0\n        self.x = 0.0\n        self.y = 0.0\n        self.z = 0.0\n        self.th = 0.0\n        self.status = 0\n\n    def getKey(self):\n        tty.setraw(sys.stdin.fileno())\n        rlist, _, _ = select.select([sys.stdin], [], [], 0.1)\n        if rlist:\n            key = sys.stdin.read(1)\n        else:\n            key = ''\n\n        termios.tcsetattr(sys.stdin, termios.TCSADRAIN, self.settings)\n        return key\n\n    def vels(self, speed, turn):\n        return f\"currently:\\tspeed {speed}\\tturn {turn}\"\n\n    def run(self):\n        self.settings = termios.tcgetattr(sys.stdin)\n\n        self.get_logger().info(msg)\n        self.get_logger().info(self.vels(self.speed, self.turn))\n\n        try:\n            while True:\n                key = self.getKey()\n                if key in moveBindings.keys():\n                    self.x = moveBindings[key][0]\n                    self.th = moveBindings[key][1]\n                elif key in speedBindings.keys():\n                    self.speed = self.speed * speedBindings[key][0]\n                    self.turn = self.turn * speedBindings[key][1]\n\n                    self.get_logger().info(self.vels(self.speed, self.turn))\n                    if (self.status == 14):\n                        self.get_logger().info(msg)\n                    self.status = (self.status + 1) % 15\n                elif key == ' ' or key == 'k':\n                    self.x = 0.0\n                    self.y = 0.0\n                    self.z = 0.0\n                    self.th = 0.0\n                else:\n                    self.x = 0.0\n                    self.y = 0.0\n                    self.z = 0.0\n                    self.th = 0.0\n                    if (key == '\\x03'):\n                        break\n\n                twist = Twist()\n                twist.linear.x = self.x * self.speed\n                twist.linear.y = self.y * self.speed\n                twist.linear.z = self.z * self.speed\n                twist.angular.x = 0.0\n                twist.angular.y = 0.0\n                twist.angular.z = self.th * self.turn\n                self.publisher_.publish(twist)\n\n        except Exception as e:\n            self.get_logger().error(f'Exception: {e}')\n\n        finally:\n            twist = Twist()\n            twist.linear.x = 0.0\n            twist.linear.y = 0.0\n            twist.linear.z = 0.0\n            twist.angular.x = 0.0\n            twist.angular.y = 0.0\n            twist.angular.z = 0.0\n            self.publisher_.publish(twist)\n\n            termios.tcsetattr(sys.stdin, termios.TCSADRAIN, self.settings)\n\ndef main(args=None):\n    rclpy.init(args=args)\n    teleop_robot = TeleopRobot()\n    \n    try:\n        teleop_robot.run()\n    except KeyboardInterrupt:\n        pass\n    finally:\n        teleop_robot.destroy_node()\n        rclpy.shutdown()\n\nif __name__ == '__main__':\n    main()\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update setup.py to add the keyboard control executable:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "entry_points={\n    'console_scripts': [\n        'talker = my_first_package.publisher_member_function:main',\n        'listener = my_first_package.subscriber_member_function:main',\n        'move_robot = my_first_package.move_robot:main',\n        'keyboard_control = my_first_package.keyboard_control:main',\n    ],\n},\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Rebuild and run:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "cd ~/ros2_ws\ncolcon build --packages-select my_first_package\nsource install/setup.bash\nros2 run my_first_package keyboard_control\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this module, you've learned the fundamentals of ROS2, including:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The core concepts of nodes, topics, and services"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The publish-subscriber communication pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TF transformations for coordinate management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "URDF for robot modeling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The ROS2 Navigation Stack"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the hands-on labs, you created your first ROS2 package, implemented publisher and subscriber nodes, and developed a keyboard control system for robot movement. These foundational skills will serve as the building block for your journey into more advanced robotics concepts in the upcoming modules."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 8453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ })

}]);