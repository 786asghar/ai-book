"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[6071],{

/***/ 6514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_4_vla_md_1d1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-4-vla-md-1d1.json
const site_docs_module_4_vla_md_1d1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-4-vla","title":"Module 4 - Vision-Language-Action Agents","description":"Introduction to Vision-Language-Action (VLA) Agents","source":"@site/docs/module-4-vla.md","sourceDirName":".","slug":"/module-4-vla","permalink":"/docs/module-4-vla","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/module-4-vla.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Module 4 - Vision-Language-Action Agents","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Module 3 - NVIDIA Isaac Sim","permalink":"/docs/module-3-ai-brain/isaac-sim"},"next":{"title":"Hardware Requirements (Optional)","permalink":"/docs/hardware"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-4-vla.md


const frontMatter = {
	title: 'Module 4 - Vision-Language-Action Agents',
	sidebar_position: 5
};
const contentTitle = 'Module 4 - Vision-Language-Action Agents';

const assets = {

};



const toc = [{
  "value": "Introduction to Vision-Language-Action (VLA) Agents",
  "id": "introduction-to-vision-language-action-vla-agents",
  "level": 2
}, {
  "value": "What are VLA Agents?",
  "id": "what-are-vla-agents",
  "level": 2
}, {
  "value": "Architecture of VLA Agents",
  "id": "architecture-of-vla-agents",
  "level": 3
}, {
  "value": "Relationship Between LLMs and Embodied AI",
  "id": "relationship-between-llms-and-embodied-ai",
  "level": 2
}, {
  "value": "Key Connections",
  "id": "key-connections",
  "level": 3
}, {
  "value": "Challenges in Integration",
  "id": "challenges-in-integration",
  "level": 3
}, {
  "value": "Perception → Instruction → Action Pipeline",
  "id": "perception--instruction--action-pipeline",
  "level": 2
}, {
  "value": "1. Perception Stage",
  "id": "1-perception-stage",
  "level": 3
}, {
  "value": "2. Instruction Understanding Stage",
  "id": "2-instruction-understanding-stage",
  "level": 3
}, {
  "value": "3. Action Execution Stage",
  "id": "3-action-execution-stage",
  "level": 3
}, {
  "value": "Current VLA Systems",
  "id": "current-vla-systems",
  "level": 2
}, {
  "value": "RT-X (Robotics Transformer-X)",
  "id": "rt-x-robotics-transformer-x",
  "level": 3
}, {
  "value": "OpenVLA",
  "id": "openvla",
  "level": 3
}, {
  "value": "Mobile ALOHA",
  "id": "mobile-aloha",
  "level": 3
}, {
  "value": "Qwen-VLA",
  "id": "qwen-vla",
  "level": 3
}, {
  "value": "Building a VLA Agent",
  "id": "building-a-vla-agent",
  "level": 2
}, {
  "value": "System Architecture",
  "id": "system-architecture",
  "level": 3
}, {
  "value": "Training Considerations",
  "id": "training-considerations",
  "level": 3
}, {
  "value": "Data Requirements",
  "id": "data-requirements",
  "level": 4
}, {
  "value": "Loss Functions",
  "id": "loss-functions",
  "level": 4
}, {
  "value": "Implementation Challenges",
  "id": "implementation-challenges",
  "level": 3
}, {
  "value": "Hands-on Labs",
  "id": "hands-on-labs",
  "level": 2
}, {
  "value": "Lab 1: Build a Small VLA Demo",
  "id": "lab-1-build-a-small-vla-demo",
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
  "value": "Lab 2: Use a Vision Encoder + LLM + Action Controller",
  "id": "lab-2-use-a-vision-encoder--llm--action-controller",
  "level": 3
}, {
  "value": "Steps:",
  "id": "steps-1",
  "level": 4
}, {
  "value": "Lab 3: Integrate with Simulation",
  "id": "lab-3-integrate-with-simulation",
  "level": 3
}, {
  "value": "Steps:",
  "id": "steps-2",
  "level": 4
}, {
  "value": "Integration with Real-World Systems",
  "id": "integration-with-real-world-systems",
  "level": 2
}, {
  "value": "Perception Pipeline Integration",
  "id": "perception-pipeline-integration",
  "level": 3
}, {
  "value": "Action Execution Safety",
  "id": "action-execution-safety",
  "level": 3
}, {
  "value": "Evaluation of VLA Systems",
  "id": "evaluation-of-vla-systems",
  "level": 2
}, {
  "value": "Metrics",
  "id": "metrics",
  "level": 3
}, {
  "value": "Benchmarking",
  "id": "benchmarking",
  "level": 3
}, {
  "value": "Future Directions",
  "id": "future-directions",
  "level": 2
}, {
  "value": "Research Areas",
  "id": "research-areas",
  "level": 3
}, {
  "value": "Challenges",
  "id": "challenges",
  "level": 3
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
        id: "module-4---vision-language-action-agents",
        children: "Module 4 - Vision-Language-Action Agents"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction-to-vision-language-action-vla-agents",
      children: "Introduction to Vision-Language-Action (VLA) Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vision-Language-Action (VLA) agents represent a significant advancement in embodied AI, combining visual perception, natural language understanding, and physical action capabilities. These agents can understand complex human instructions, perceive the environment through visual sensors, and execute appropriate actions to accomplish tasks in physical or simulated environments."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VLA agents differ from traditional robotics approaches by integrating these three modalities in a unified framework, enabling more natural human-robot interaction and more flexible task execution without requiring pre-programmed behavior sequences."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-are-vla-agents",
      children: "What are VLA Agents?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VLA agents are a form of multimodal AI system that can:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Perceive"
        }), ": Process visual information from cameras or other sensors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Understand"
        }), ": Interpret natural language commands and instructions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Act"
        }), ": Execute appropriate physical or simulated actions based on perception and understanding"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key innovation of VLA agents is the end-to-end training of these three components together, allowing for more robust and flexible behavior than traditional modular approaches."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture-of-vla-agents",
      children: "Architecture of VLA Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A typical VLA agent consists of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vision Encoder"
        }), ": Processes visual inputs (images, video) to extract relevant features"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Language Encoder"
        }), ": Interprets natural language commands and instructions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fusion Module"
        }), ": Combines visual and linguistic information to form a unified representation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action Decoder"
        }), ": Generates appropriate motor commands or action sequences"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy Network"
        }), ": Makes decisions based on the fused representation and current state"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Conceptual architecture of a VLA agent\nimport torch\nimport torch.nn as nn\n\nclass VLAAgent(nn.Module):\n    def __init__(self, vision_encoder, language_encoder, fusion_module, action_decoder):\n        super(VLAAgent, self).__init__()\n        self.vision_encoder = vision_encoder\n        self.language_encoder = language_encoder\n        self.fusion_module = fusion_module\n        self.action_decoder = action_decoder\n    \n    def forward(self, visual_input, language_input):\n        # Encode visual information\n        visual_features = self.vision_encoder(visual_input)\n        \n        # Encode linguistic information\n        language_features = self.language_encoder(language_input)\n        \n        # Fuse modalities\n        fused_features = self.fusion_module(visual_features, language_features)\n        \n        # Generate action\n        action = self.action_decoder(fused_features)\n        \n        return action\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "relationship-between-llms-and-embodied-ai",
      children: "Relationship Between LLMs and Embodied AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Large Language Models (LLMs) have shown remarkable capabilities in understanding and generating natural language. However, traditional LLMs operate in the digital realm without physical grounding. VLA agents bridge this gap by connecting LLM capabilities with physical action execution."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-connections",
      children: "Key Connections"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semantic Understanding"
        }), ": LLMs provide sophisticated understanding of natural language instructions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reasoning"
        }), ": LLMs can decompose complex tasks into simpler subtasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context Awareness"
        }), ": LLMs can maintain context across multiple interactions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generalization"
        }), ": LLMs enable generalization to novel tasks and instructions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenges-in-integration",
      children: "Challenges in Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Grounding Problem"
        }), ": Connecting abstract language concepts to physical actions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-time Constraints"
        }), ": Ensuring timely action execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Perception-Action Loops"
        }), ": Maintaining continuous interaction between perception and action"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety"
        }), ": Ensuring actions are safe in physical environments"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "perception--instruction--action-pipeline",
      children: "Perception → Instruction → Action Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The core pipeline of VLA agents processes information in three main stages:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-perception-stage",
      children: "1. Perception Stage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The perception stage processes sensory inputs to create an understanding of the current environment:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visual Processing"
        }), ": Extracting relevant features from camera feeds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scene Understanding"
        }), ": Identifying objects, their properties, and spatial relationships"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State Estimation"
        }), ": Understanding the current configuration of the environment"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Example perception pipeline\nclass PerceptionPipeline:\n    def __init__(self):\n        # Initialize visual processing components\n        self.object_detector = ObjectDetector()\n        self.depth_estimator = DepthEstimator()\n        self.scene_segmenter = SceneSegmenter()\n    \n    def process_scene(self, rgb_image, depth_image=None):\n        objects = self.object_detector.detect(rgb_image)\n        if depth_image is not None:\n            object_distances = self.depth_estimator.estimate(objects, depth_image)\n        else:\n            # Estimate distances from monocular image\n            object_distances = self.depth_estimator.estimate_monocular(rgb_image)\n        \n        scene_graph = self.scene_segmenter.create_graph(objects, object_distances)\n        return scene_graph\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-instruction-understanding-stage",
      children: "2. Instruction Understanding Stage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The instruction understanding stage interprets the human command:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Language Parsing"
        }), ": Breaking down the instruction into semantic components"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intent Recognition"
        }), ": Understanding the goal of the instruction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constraint Identification"
        }), ": Identifying any constraints or requirements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action Planning"
        }), ": Determining the sequence of actions needed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Example instruction understanding\nclass InstructionUnderstanding:\n    def __init__(self, language_model):\n        self.lang_model = language_model\n    \n    def parse_instruction(self, instruction):\n        # Process the natural language instruction\n        parsed = self.lang_model.parse(instruction)\n        \n        # Extract components\n        action = parsed.get('action', '')\n        target = parsed.get('target_object', '')\n        location = parsed.get('target_location', '')\n        constraints = parsed.get('constraints', [])\n        \n        return {\n            'action': action,\n            'target': target,\n            'location': location,\n            'constraints': constraints\n        }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-action-execution-stage",
      children: "3. Action Execution Stage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The action execution stage generates and executes motor commands:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy Selection"
        }), ": Choosing appropriate action based on perception and instruction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Motor Command Generation"
        }), ": Creating specific commands for the robot"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execution Monitoring"
        }), ": Tracking action progress and adapting as needed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feedback Integration"
        }), ": Adjusting actions based on results"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Example action execution\nclass ActionExecutor:\n    def __init__(self, robot_interface):\n        self.robot = robot_interface\n        self.action_primitives = {\n            'move_to': self.move_to,\n            'grasp': self.grasp,\n            'place': self.place,\n            'push': self.push\n        }\n    \n    def execute_action(self, action, target_location, scene_graph):\n        if action in self.action_primitives:\n            return self.action_primitives[action](target_location, scene_graph)\n        else:\n            raise ValueError(f\"Unknown action: {action}\")\n    \n    def move_to(self, target_location, scene_graph):\n        # Path planning to target location\n        path = self.plan_path(target_location, scene_graph)\n        for waypoint in path:\n            self.robot.move_to(waypoint)\n    \n    def grasp(self, object_info, scene_graph):\n        # Position gripper relative to object\n        grasp_pose = self.compute_grasp_pose(object_info, scene_graph)\n        self.robot.move_to(grasp_pose)\n        self.robot.close_gripper()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "current-vla-systems",
      children: "Current VLA Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rt-x-robotics-transformer-x",
      children: "RT-X (Robotics Transformer-X)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RT-X by Google represents one of the most significant advances in VLA systems:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Approach"
        }), ": Uses a transformer architecture to learn policies from large-scale robot data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Innovation"
        }), ": Pre-trains on diverse robot data, then fine-tunes for specific tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Capabilities"
        }), ": Can generalize to new tasks with minimal fine-tuning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Limitations"
        }), ": Requires substantial training data and computational resources"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "openvla",
      children: "OpenVLA"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenVLA represents the open-source effort to democratize VLA research:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Approach"
        }), ": Open-source implementation of VLA models for research and development"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Innovation"
        }), ": Makes VLA technology accessible to the broader research community"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Capabilities"
        }), ": Supports various robot platforms and manipulation tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Limitations"
        }), ": Still in active development with evolving capabilities"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mobile-aloha",
      children: "Mobile ALOHA"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mobile ALOHA focuses on mobile manipulation tasks:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Approach"
        }), ": Combines mobile base control with dexterous manipulation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Innovation"
        }), ": Handles tasks requiring both navigation and manipulation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Capabilities"
        }), ": Complex household tasks like cooking and cleaning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Limitations"
        }), ": Primarily evaluated in household environments"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qwen-vla",
      children: "Qwen-VLA"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Qwen-VLA integrates with Alibaba's Qwen language models:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Approach"
        }), ": Leverages advanced language understanding capabilities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Innovation"
        }), ": Strong linguistic comprehension for complex instructions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Capabilities"
        }), ": Handles nuanced language commands and multi-step tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Limitations"
        }), ": Part of the broader Qwen ecosystem, access may be limited"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "building-a-vla-agent",
      children: "Building a VLA Agent"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-architecture",
      children: "System Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Complete VLA agent system\nimport torch\nimport torch.nn as nn\nfrom transformers import CLIPVisionModel, CLIPTextModel, CLIPTokenizer\n\nclass VisionLanguageActionAgent(nn.Module):\n    def __init__(self, robot_config, action_space_dim):\n        super().__init__()\n        \n        # Vision encoder (using CLIP as example)\n        self.vision_encoder = CLIPVisionModel.from_pretrained(\"openai/clip-vit-base-patch32\")\n        \n        # Language encoder (using CLIP as example)\n        self.text_encoder = CLIPTextModel.from_pretrained(\"openai/clip-vit-base-patch32\")\n        self.tokenizer = CLIPTokenizer.from_pretrained(\"openai/clip-vit-base-patch32\")\n        \n        # Fusion and policy network\n        self.fusion_layer = nn.Linear(1024, 512)  # CLIP embedding to fusion\n        self.policy_network = nn.Sequential(\n            nn.Linear(512, 256),\n            nn.ReLU(),\n            nn.Linear(256, 128),\n            nn.ReLU(),\n            nn.Linear(128, action_space_dim)\n        )\n        \n        # Action space information\n        self.action_space_dim = action_space_dim\n    \n    def encode_vision(self, images):\n        vision_outputs = self.vision_encoder(images)\n        # Extract the pooled output\n        vision_features = vision_outputs.pooler_output\n        return vision_features\n    \n    def encode_language(self, texts):\n        inputs = self.tokenizer(texts, return_tensors=\"pt\", padding=True, truncation=True)\n        text_outputs = self.text_encoder(**inputs)\n        text_features = text_outputs.pooler_output\n        return text_features\n    \n    def forward(self, images, texts, robot_state=None):\n        # Encode vision and language\n        vision_features = self.encode_vision(images)\n        text_features = self.encode_language(texts)\n        \n        # Normalize features\n        vision_features = vision_features / vision_features.norm(dim=-1, keepdim=True)\n        text_features = text_features / text_features.norm(dim=-1, keepdim=True)\n        \n        # Fuse vision and language features\n        fused_features = torch.cat([vision_features, text_features], dim=-1)\n        fused_features = self.fusion_layer(fused_features)\n        \n        # Include robot state if available (for closed-loop control)\n        if robot_state is not None:\n            fused_features = torch.cat([fused_features, robot_state], dim=-1)\n        \n        # Generate action\n        action = self.policy_network(fused_features)\n        \n        return action\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "training-considerations",
      children: "Training Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Training VLA agents requires addressing several key challenges:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "data-requirements",
      children: "Data Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multimodal Data"
        }), ": Coordinated vision, language, and action data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Diverse Tasks"
        }), ": Training on a wide variety of tasks for generalization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Temporal Consistency"
        }), ": Ensuring actions are appropriate in temporal context"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety Constraints"
        }), ": Including safety information in training data"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "loss-functions",
      children: "Loss Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The loss function for VLA agents typically combines multiple components:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def vla_loss(action_pred, action_gt, vision_features, text_features, margin=0.2):\n    # Action prediction loss\n    action_loss = nn.MSELoss()(action_pred, action_gt)\n    \n    # Contrastive loss to align vision and text embeddings\n    contrastive_loss = contrastive_alignment_loss(vision_features, text_features, margin)\n    \n    # Combined loss\n    total_loss = action_loss + 0.1 * contrastive_loss\n    \n    return total_loss\n\ndef contrastive_alignment_loss(vision_features, text_features, margin):\n    # Compute similarity between vision and text features\n    similarity = torch.matmul(vision_features, text_features.t())\n    \n    # Diagonal elements are positive pairs\n    positive_pairs = torch.diag(similarity)\n    \n    # Negative pairs (off-diagonal)\n    pos_loss = torch.mean(torch.clamp(margin - positive_pairs, min=0))\n    neg_loss = torch.mean(torch.clamp(similarity - margin, min=0))\n    \n    # Exclude diagonal from negative loss\n    neg_loss = neg_loss - torch.mean(torch.clamp(torch.diag(similarity) - margin, min=0))\n    \n    return pos_loss + neg_loss\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation-challenges",
      children: "Implementation Challenges"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sim-to-Real Transfer"
        }), ": Bridging differences between simulation and reality"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-time Performance"
        }), ": Ensuring timely action execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety"
        }), ": Implementing safety checks and constraints"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generalization"
        }), ": Ensuring performance on unseen tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scalability"
        }), ": Handling complex real-world environments"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hands-on-labs",
      children: "Hands-on Labs"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lab-1-build-a-small-vla-demo",
      children: "Lab 1: Build a Small VLA Demo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this lab, you will implement a basic VLA agent that can understand simple commands and execute corresponding actions in a simulated environment."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python 3.8+"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PyTorch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OpenCV"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ROS2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gazebo (from Module 2)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "steps",
      children: "Steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create a new ROS2 package for the VLA system:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "cd ~/ros2_ws/src\nros2 pkg create --build-type ament_python vla_demo_pkg\ncd vla_demo_pkg\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Install required dependencies:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pip3 install torch torchvision torchaudio\npip3 install transformers\npip3 install opencv-python\npip3 install numpy\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create the main VLA agent implementation:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "mkdir -p vla_demo_pkg\ntouch vla_demo_pkg/vla_agent.py\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add the following code to vla_demo_pkg/vla_agent.py:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "#!/usr/bin/env python3\n\nimport rclpy\nfrom rclpy.node import Node\nfrom std_msgs.msg import String\nfrom sensor_msgs.msg import Image, CameraInfo\nfrom geometry_msgs.msg import Twist\nfrom cv_bridge import CvBridge\nimport cv2\nimport numpy as np\nimport torch\nimport torch.nn as nn\nimport torch.nn.functional as F\nfrom transformers import CLIPProcessor, CLIPModel\nimport time\n\nclass SimpleVLAAgent(Node):\n    def __init__(self):\n        super().__init__('vla_agent')\n        \n        # Initialize CV bridge\n        self.bridge = CvBridge()\n        \n        # Subscribe to camera feed\n        self.image_sub = self.create_subscription(\n            Image,\n            '/camera/image_raw',\n            self.image_callback,\n            10\n        )\n        \n        # Subscribe to text commands\n        self.command_sub = self.create_subscription(\n            String,\n            '/text_command',\n            self.command_callback,\n            10\n        )\n        \n        # Publisher for robot commands\n        self.cmd_pub = self.create_publisher(Twist, '/cmd_vel', 10)\n        \n        # Timer for control loop\n        self.timer = self.create_timer(0.1, self.control_loop)\n        \n        # Initialize the VLA agent components\n        self.current_image = None\n        self.current_command = \"\"\n        self.last_command_time = time.time()\n        \n        # Simple command-action mapping (in a real system this would be more sophisticated)\n        self.command_action_map = {\n            \"move forward\": self.move_forward,\n            \"move backward\": self.move_backward,\n            \"turn left\": self.turn_left,\n            \"turn right\": self.turn_right,\n            \"stop\": self.stop_robot\n        }\n        \n        self.get_logger().info(\"VLA Agent initialized\")\n    \n    def image_callback(self, msg):\n        # Convert ROS image to OpenCV format\n        try:\n            cv_image = self.bridge.imgmsg_to_cv2(msg, \"bgr8\")\n            self.current_image = cv_image\n        except Exception as e:\n            self.get_logger().error(f\"Error converting image: {e}\")\n    \n    def command_callback(self, msg):\n        # Process text command\n        self.current_command = msg.data.lower().strip()\n        self.last_command_time = time.time()\n        self.get_logger().info(f\"Received command: {self.current_command}\")\n    \n    def control_loop(self):\n        if self.current_command and self.current_image is not None:\n            # In a real VLA system, this would involve neural network inference\n            # For this demo, we use simple command mapping\n            \n            # Execute command if it's a valid action\n            if self.current_command in self.command_action_map:\n                command_func = self.command_action_map[self.current_command]\n                command_func()\n            \n            # Clear command after execution (in real system, we might keep it for continuous commands)\n            self.current_command = \"\"\n    \n    def move_forward(self):\n        twist = Twist()\n        twist.linear.x = 0.5  # Move forward at 0.5 m/s\n        twist.angular.z = 0.0\n        self.cmd_pub.publish(twist)\n        self.get_logger().info(\"Moving forward\")\n    \n    def move_backward(self):\n        twist = Twist()\n        twist.linear.x = -0.5  # Move backward at 0.5 m/s\n        twist.angular.z = 0.0\n        self.cmd_pub.publish(twist)\n        self.get_logger().info(\"Moving backward\")\n    \n    def turn_left(self):\n        twist = Twist()\n        twist.linear.x = 0.0\n        twist.angular.z = 0.5  # Turn left at 0.5 rad/s\n        self.cmd_pub.publish(twist)\n        self.get_logger().info(\"Turning left\")\n    \n    def turn_right(self):\n        twist = Twist()\n        twist.linear.x = 0.0\n        twist.angular.z = -0.5  # Turn right at -0.5 rad/s\n        self.cmd_pub.publish(twist)\n        self.get_logger().info(\"Turning right\")\n    \n    def stop_robot(self):\n        twist = Twist()\n        twist.linear.x = 0.0\n        twist.angular.z = 0.0\n        self.cmd_pub.publish(twist)\n        self.get_logger().info(\"Stopping robot\")\n\ndef main(args=None):\n    rclpy.init(args=args)\n    vla_agent = SimpleVLAAgent()\n    \n    try:\n        rclpy.spin(vla_agent)\n    except KeyboardInterrupt:\n        pass\n    finally:\n        vla_agent.destroy_node()\n        rclpy.shutdown()\n\nif __name__ == '__main__':\n    main()\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create an alternative VLA implementation with actual neural network components:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "touch vla_demo_pkg/vla_model.py\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add the following code to vla_demo_pkg/vla_model.py:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "import torch\nimport torch.nn as nn\nimport torchvision.transforms as transforms\nfrom transformers import CLIPModel, CLIPProcessor\nimport numpy as np\nimport cv2\n\nclass SimpleVLA(nn.Module):\n    def __init__(self, action_dim=2, hidden_dim=256):\n        super(SimpleVLA, self).__init__()\n        \n        # Use CLIP for vision-language processing\n        self.clip_model = CLIPModel.from_pretrained(\"openai/clip-vit-base-patch32\")\n        self.clip_processor = CLIPProcessor.from_pretrained(\"openai/clip-vit-base-patch32\")\n        \n        # Vision feature extractor (will be frozen, but we'll use CLIP's features)\n        # Note: In practice, you might fine-tune parts of CLIP\n        \n        # Action decoder - takes fused vision-language features and outputs actions\n        self.action_decoder = nn.Sequential(\n            nn.Linear(512, hidden_dim),  # CLIP outputs 512-d features for base model\n            nn.ReLU(),\n            nn.Linear(hidden_dim, hidden_dim),\n            nn.ReLU(),\n            nn.Linear(hidden_dim, action_dim)\n        )\n        \n        # Initialize with small weights\n        for layer in self.action_decoder:\n            if isinstance(layer, nn.Linear):\n                nn.init.xavier_uniform_(layer.weight)\n                nn.init.zeros_(layer.bias)\n    \n    def forward(self, images, text_descriptions):\n        # Process images through CLIP vision encoder\n        inputs = self.clip_processor(\n            text=text_descriptions, \n            images=images, \n            return_tensors=\"pt\", \n            padding=True\n        )\n        \n        # Get image and text embeddings\n        image_features = self.clip_model.get_image_features(**inputs)\n        text_features = self.clip_model.get_text_features(**inputs)\n        \n        # Normalize features (as CLIP does)\n        image_features = image_features / image_features.norm(dim=-1, keepdim=True)\n        text_features = text_features / text_features.norm(dim=-1, keepdim=True)\n        \n        # Fuse vision and language features (simple concatenation)\n        fused_features = torch.cat([image_features, text_features], dim=-1)\n        \n        # Project to a common space\n        fused_features = torch.relu(fused_features)  # Simple activation\n        \n        # Decode to actions\n        actions = self.action_decoder(fused_features)\n        \n        return actions\n\nclass VLAInterface:\n    def __init__(self):\n        self.device = torch.device(\"cuda\" if torch.cuda.is_available() else \"cpu\")\n        self.model = SimpleVLA(action_dim=2).to(self.device)\n        \n        # Example transformation for images\n        self.transform = transforms.Compose([\n            transforms.ToPILImage(),\n            transforms.Resize((224, 224)),\n            transforms.ToTensor(),\n            transforms.Normalize(mean=[0.485, 0.456, 0.406], \n                               std=[0.229, 0.224, 0.225])\n        ])\n    \n    def preprocess_image(self, cv_image):\n        # Convert BGR to RGB\n        rgb_image = cv2.cvtColor(cv_image, cv2.COLOR_BGR2RGB)\n        # Apply transforms\n        tensor_image = self.transform(rgb_image)\n        return tensor_image.unsqueeze(0)  # Add batch dimension\n    \n    def predict_action(self, cv_image, command_text):\n        # Preprocess image\n        image_tensor = self.preprocess_image(cv_image)\n        \n        # Move to device\n        image_tensor = image_tensor.to(self.device)\n        \n        # Inference\n        with torch.no_grad():\n            action = self.model(image_tensor, [command_text])\n        \n        # Convert to numpy and return\n        return action.cpu().numpy()[0]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create a test script to demonstrate the VLA:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "touch vla_demo_pkg/test_vla.py\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add the following code to vla_demo_pkg/test_vla.py:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "#!/usr/bin/env python3\n\"\"\"\nTest script for VLA model\n\"\"\"\nimport torch\nimport cv2\nimport numpy as np\nfrom vla_demo_pkg.vla_model import VLAInterface\n\ndef test_vla():\n    # Initialize VLA interface\n    vla = VLAInterface()\n    \n    # Create a dummy image for testing\n    dummy_image = np.random.randint(0, 255, (480, 640, 3), dtype=np.uint8)\n    \n    # Test with different commands\n    commands = [\n        \"move forward\",\n        \"turn left\",\n        \"turn right\",\n        \"stop\"\n    ]\n    \n    print(\"Testing VLA model with dummy images and commands:\")\n    for cmd in commands:\n        action = vla.predict_action(dummy_image, cmd)\n        print(f\"Command: '{cmd}' -> Action: [{action[0]:.3f}, {action[1]:.3f}]\")\n\nif __name__ == \"__main__\":\n    test_vla()\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Update setup.py to add the new executables:"
          }), "\nAdd to the entry_points in setup.py:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "entry_points={\n    'console_scripts': [\n        'vla_agent = vla_demo_pkg.vla_agent:main',\n        'test_vla = vla_demo_pkg.test_vla:main',\n    ],\n},\n"
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
            children: "cd ~/ros2_ws\ncolcon build --packages-select vla_demo_pkg\nsource install/setup.bash\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lab-2-use-a-vision-encoder--llm--action-controller",
      children: "Lab 2: Use a Vision Encoder + LLM + Action Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this lab, you'll build a more sophisticated VLA system using a pre-trained vision encoder, language model, and action controller."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "steps-1",
      children: "Steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create a more advanced VLA implementation:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "touch vla_demo_pkg/advanced_vla.py\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add the following code to vla_demo_pkg/advanced_vla.py:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "#!/usr/bin/env python3\n\"\"\"\nAdvanced VLA implementation using separate vision encoder, LLM, and action controller\n\"\"\"\n\nimport rclpy\nfrom rclpy.node import Node\nfrom std_msgs.msg import String\nfrom sensor_msgs.msg import Image\nfrom geometry_msgs.msg import Twist\nfrom cv_bridge import CvBridge\nimport cv2\nimport torch\nimport torch.nn as nn\nimport numpy as np\nimport requests\nimport json\n\nclass AdvancedVLAAgent(Node):\n    def __init__(self):\n        super().__init__('advanced_vla_agent')\n        \n        # Initialize CV bridge\n        self.bridge = CvBridge()\n        \n        # Subscribe to camera feed\n        self.image_sub = self.create_subscription(\n            Image,\n            '/camera/image_raw',\n            self.image_callback,\n            10\n        )\n        \n        # Subscribe to text commands\n        self.command_sub = self.create_subscription(\n            String,\n            '/text_command',\n            self.command_callback,\n            10\n        )\n        \n        # Publisher for robot commands\n        self.cmd_pub = self.create_publisher(Twist, '/cmd_vel', 10)\n        \n        # Timer for control loop\n        self.timer = self.create_timer(0.1, self.control_loop)\n        \n        # Agent state\n        self.current_image = None\n        self.current_command = \"\"\n        self.last_command_time = self.get_clock().now().seconds_nanoseconds()[0]\n        \n        # Initialize components (simplified for this demo)\n        self.vision_encoder = self.initialize_vision_encoder()\n        self.action_controller = self.initialize_action_controller()\n        \n        self.get_logger().info(\"Advanced VLA Agent initialized\")\n    \n    def initialize_vision_encoder(self):\n        # In a real implementation, this would load a pre-trained vision model\n        # For this demo, we'll simulate the vision processing\n        def dummy_vision_encoder(image):\n            # Convert to grayscale and compute a simple feature vector\n            gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)\n            # Simple features: average intensity in different regions\n            h, w = gray.shape\n            regions = [\n                gray[0:h//2, 0:w//2],  # top-left\n                gray[0:h//2, w//2:w],  # top-right\n                gray[h//2:h, 0:w//2],  # bottom-left\n                gray[h//2:h, w//2:w]   # bottom-right\n            ]\n            features = [np.mean(region) for region in regions]\n            return np.array(features)\n        \n        return dummy_vision_encoder\n    \n    def initialize_action_controller(self):\n        # In a real implementation, this would be a pre-trained action controller\n        # For this demo, we'll create a simple mapping\n        def dummy_action_controller(vision_features, command):\n            # Simple mapping based on visual features and command\n            if \"forward\" in command.lower():\n                return np.array([0.5, 0.0])  # Linear velocity, angular velocity\n            elif \"backward\" in command.lower():\n                return np.array([-0.5, 0.0])\n            elif \"left\" in command.lower():\n                return np.array([0.0, 0.5])\n            elif \"right\" in command.lower():\n                return np.array([0.0, -0.5])\n            elif \"stop\" in command.lower():\n                return np.array([0.0, 0.0])\n            else:\n                # Default to forward motion if command not recognized\n                return np.array([0.2, 0.0])\n        \n        return dummy_action_controller\n    \n    def image_callback(self, msg):\n        try:\n            cv_image = self.bridge.imgmsg_to_cv2(msg, \"bgr8\")\n            self.current_image = cv_image\n            # For this demo, we'll just store the image\n            # In a real system, we would process it through the vision encoder\n        except Exception as e:\n            self.get_logger().error(f\"Error converting image: {e}\")\n    \n    def command_callback(self, msg):\n        self.current_command = msg.data.lower().strip()\n        self.last_command_time = self.get_clock().now().seconds_nanoseconds()[0]\n        self.get_logger().info(f\"Received command: {self.current_command}\")\n    \n    def control_loop(self):\n        if self.current_image is not None and self.current_command:\n            # Process image through vision encoder\n            vision_features = self.vision_encoder(self.current_image)\n            \n            # Process command through \"LLM\" (in this case, just use it as is)\n            # In a real system, this would involve more sophisticated language processing\n            command = self.current_command\n            \n            # Generate action through action controller\n            action = self.action_controller(vision_features, command)\n            \n            # Execute action (publish to robot)\n            twist = Twist()\n            twist.linear.x = float(action[0])\n            twist.angular.z = float(action[1])\n            self.cmd_pub.publish(twist)\n            \n            self.get_logger().info(f\"Action executed - Linear: {action[0]:.2f}, Angular: {action[1]:.2f}\")\n            \n            # Clear command after execution\n            self.current_command = \"\"\n    \n    def process_command_with_llm(self, command):\n        # In a real implementation, this would connect to an LLM API\n        # For this demo, we'll just return the command as is\n        return command\n\ndef main(args=None):\n    rclpy.init(args=args)\n    vla_agent = AdvancedVLAAgent()\n    \n    try:\n        rclpy.spin(vla_agent)\n    except KeyboardInterrupt:\n        pass\n    finally:\n        vla_agent.destroy_node()\n        rclpy.shutdown()\n\nif __name__ == '__main__':\n    main()\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Update setup.py with the new executable:"
          }), "\nAdd to the entry_points:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "entry_points={\n    'console_scripts': [\n        'vla_agent = vla_demo_pkg.vla_agent:main',\n        'test_vla = vla_demo_pkg.test_vla:main',\n        'advanced_vla_agent = vla_demo_pkg.advanced_vla:main',\n    ],\n},\n"
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
            children: "cd ~/ros2_ws\ncolcon build --packages-select vla_demo_pkg\nsource install/setup.bash\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lab-3-integrate-with-simulation",
      children: "Lab 3: Integrate with Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this lab, you'll integrate your VLA system with the simulation environment you created in Module 2."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "steps-2",
      children: "Steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create a launch file to run the complete VLA system in simulation:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "mkdir -p ~/ros2_ws/src/vla_demo_pkg/launch\ntouch ~/ros2_ws/src/vla_demo_pkg/launch/vla_simulation.launch.py\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add the following content to the launch file:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "import os\nfrom launch import LaunchDescription\nfrom launch.actions import ExecuteProcess, DeclareLaunchArgument, RegisterEventHandler\nfrom launch.event_handlers import OnProcessExit\nfrom launch.substitutions import LaunchConfiguration\nfrom launch_ros.actions import Node\nfrom ament_index_python.packages import get_package_share_directory\n\ndef generate_launch_description():\n    # Launch Gazebo with a world file that has the robot\n    package_dir = get_package_share_directory('gazebo_robot_pkg')\n    world_file = os.path.join(package_dir, 'worlds', 'simple_obstacle_course.world')\n    \n    # Launch Gazebo with our robot\n    gazebo = ExecuteProcess(\n        cmd=[\n            'gazebo',\n            '--verbose',\n            '-s', 'libgazebo_ros_factory.so',\n            '-s', 'libgazebo_ros_init.so',\n            world_file\n        ],\n        output='screen'\n    )\n    \n    # Launch our VLA agent node\n    vla_node = Node(\n        package='vla_demo_pkg',\n        executable='advanced_vla_agent',\n        name='vla_agent',\n        output='screen'\n    )\n    \n    # Publisher for commands (for testing)\n    command_publisher = Node(\n        package='vla_demo_pkg',\n        executable='command_publisher',  # We'll create this next\n        name='command_publisher',\n        output='screen'\n    )\n    \n    return LaunchDescription([\n        gazebo,\n        vla_node,\n        command_publisher\n    ])\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create a command publisher for testing:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "touch vla_demo_pkg/command_publisher.py\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add the following content to command_publisher.py:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "#!/usr/bin/env python3\n\"\"\"\nSimple command publisher to send test commands to the VLA agent\n\"\"\"\n\nimport rclpy\nfrom rclpy.node import Node\nfrom std_msgs.msg import String\nimport time\n\nclass CommandPublisher(Node):\n    def __init__(self):\n        super().__init__('command_publisher')\n        \n        # Publisher for text commands\n        self.command_pub = self.create_publisher(String, '/text_command', 10)\n        \n        # Timer to send commands periodically\n        self.timer = self.create_timer(5.0, self.publish_command)\n        self.command_sequence = [\n            \"move forward\",\n            \"turn right\",\n            \"move forward\",\n            \"turn left\", \n            \"stop\"\n        ]\n        self.command_index = 0\n        \n        self.get_logger().info(\"Command publisher initialized\")\n    \n    def publish_command(self):\n        if self.command_index < len(self.command_sequence):\n            cmd = String()\n            cmd.data = self.command_sequence[self.command_index]\n            \n            self.command_pub.publish(cmd)\n            self.get_logger().info(f\"Published command: {cmd.data}\")\n            \n            self.command_index += 1\n        else:\n            # Reset to loop commands\n            self.command_index = 0\n\ndef main(args=None):\n    rclpy.init(args=args)\n    publisher = CommandPublisher()\n    \n    try:\n        rclpy.spin(publisher)\n    except KeyboardInterrupt:\n        pass\n    finally:\n        publisher.destroy_node()\n        rclpy.shutdown()\n\nif __name__ == '__main__':\n    main()\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Update setup.py with the new executable:"
          }), "\nAdd to entry_points:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "entry_points={\n    'console_scripts': [\n        'vla_agent = vla_demo_pkg.vla_agent:main',\n        'test_vla = vla_demo_pkg.test_vla:main',\n        'advanced_vla_agent = vla_demo_pkg.advanced_vla:main',\n        'command_publisher = vla_demo_pkg.command_publisher:main',\n    ],\n},\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Rebuild and test the complete VLA system:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "cd ~/ros2_ws\ncolcon build --packages-select vla_demo_pkg\nsource install/setup.bash\n\n# Run the complete system\nros2 launch vla_demo_pkg vla_simulation.launch.py\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integration-with-real-world-systems",
      children: "Integration with Real-World Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "perception-pipeline-integration",
      children: "Perception Pipeline Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Real-world VLA systems require robust perception pipelines:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class RobustPerceptionPipeline:\n    def __init__(self):\n        # Initialize multiple perception modules\n        self.rgb_processor = RGBProcessor()\n        self.depth_processor = DepthProcessor()\n        self.object_detector = ObjectDetector()\n        self.segmentation_model = SegmentationModel()\n    \n    def process_frame(self, rgb_image, depth_image=None):\n        # Process RGB image\n        rgb_features = self.rgb_processor.extract_features(rgb_image)\n        \n        # Process depth if available\n        if depth_image is not None:\n            depth_features = self.depth_processor.extract_features(depth_image)\n        else:\n            # Estimate depth from RGB if needed\n            depth_features = self.depth_processor.estimate_from_rgb(rgb_image)\n        \n        # Detect objects\n        objects = self.object_detector.detect(rgb_image)\n        \n        # Segment image to understand scene layout\n        segmentation = self.segmentation_model.segment(rgb_image)\n        \n        # Combine all information\n        scene_understanding = {\n            'rgb_features': rgb_features,\n            'depth_features': depth_features,\n            'objects': objects,\n            'segmentation': segmentation\n        }\n        \n        return scene_understanding\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "action-execution-safety",
      children: "Action Execution Safety"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Safety is critical in VLA systems:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SafeActionExecutor:\n    def __init__(self):\n        self.robot_interface = RobotInterface()\n        self.safety_monitor = SafetyMonitor()\n    \n    def execute_with_safety(self, action, scene_understanding):\n        # Validate action against scene understanding\n        if not self.safety_monitor.is_safe_action(action, scene_understanding):\n            self.get_logger().warn(\"Action not safe, skipping\")\n            return False\n        \n        # Execute action\n        success = self.robot_interface.execute_action(action)\n        \n        # Monitor execution for safety\n        if success:\n            self.safety_monitor.start_monitoring()\n        \n        return success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evaluation-of-vla-systems",
      children: "Evaluation of VLA Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "metrics",
      children: "Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VLA systems are evaluated using:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task Success Rate"
        }), ": Percentage of tasks completed successfully"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Language Grounding"
        }), ": How well instructions are followed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Perception Accuracy"
        }), ": How well the environment is understood"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action Efficiency"
        }), ": How efficiently tasks are completed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Robustness"
        }), ": Performance under varying conditions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "benchmarking",
      children: "Benchmarking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common benchmarks for VLA systems include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manipulation Tasks"
        }), ": Object grasping, rearrangement, assembly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Navigation Tasks"
        }), ": Indoor navigation, obstacle avoidance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Combined Tasks"
        }), ": Navigation with manipulation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Long-horizon Tasks"
        }), ": Multi-step operations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "future-directions",
      children: "Future Directions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "research-areas",
      children: "Research Areas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-modal Integration"
        }), ": Better fusion of vision, language, and other modalities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Learning from Demonstration"
        }), ": Few-shot learning from human demonstrations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Causal Reasoning"
        }), ": Understanding cause-and-effect relationships"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Social Interaction"
        }), ": Human-robot interaction and collaboration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Embodied Learning"
        }), ": Learning through interaction with the environment"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenges",
      children: "Challenges"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scalability"
        }), ": Training on large, diverse datasets"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sim-to-Real Transfer"
        }), ": Bridging simulation and reality"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety and Ethics"
        }), ": Ensuring safe and ethical robot behavior"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-time Performance"
        }), ": Ensuring timely responses"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generalization"
        }), ": Handling unseen scenarios and tasks"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this module, you've learned about Vision-Language-Action agents, including:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The fundamental concepts of VLA systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The relationship between LLMs and embodied AI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The perception-instruction-action pipeline architecture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Current VLA systems like RT-X, OpenVLA, Mobile ALOHA, and Qwen-VLA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementation techniques for building VLA agents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Safety and integration considerations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluation metrics and benchmarks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Future research directions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the hands-on labs, you implemented a basic VLA system with vision encoder, language understanding, and action control components, and integrated it with a simulated robotic environment. This completes the technical foundation of the Physical AI & Robotics Bootcamp, preparing you to tackle complex embodied AI challenges."
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