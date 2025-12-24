---
title: Tools & Software Setup
sidebar_position: 7
---

# Tools & Software Setup

## Overview

This guide provides detailed instructions for setting up all the necessary tools and software required for the Physical AI & Robotics Bootcamp. Follow these steps carefully to ensure your development environment is properly configured for all modules of the course.

## System Requirements

Before beginning the installation process, ensure your system meets the following requirements:

### Minimum Requirements
- **OS**: Ubuntu 20.04 LTS or 22.04 LTS (preferred), Windows 10/11 with WSL2, or macOS 10.15+
- **RAM**: 8 GB minimum, 16 GB recommended
- **Storage**: 20 GB available space
- **Processor**: Multi-core processor with support for virtualization
- **Graphics**: Dedicated GPU recommended for Isaac Sim (NVIDIA GPU with CUDA support preferred)

### Recommended Requirements
- **OS**: Ubuntu 22.04 LTS
- **RAM**: 16 GB or more
- **Storage**: 50 GB available space
- **Graphics**: NVIDIA GPU with 8GB+ VRAM (for Isaac Sim and deep learning tasks)

## ROS2 Installation (Humble Hawksbill)

ROS2 Humble Hawksbill is the LTS (Long Term Support) version recommended for this course.

### On Ubuntu 22.04

1. **Set locale to support UTF-8:**
   ```bash
   sudo locale-gen en_US.UTF-8
   ```

2. **Add the ROS2 GPG key and repository:**
   ```bash
   sudo apt update && sudo apt install -y curl gnupg lsb-release
   sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(source /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
   ```

3. **Update apt and install ROS2:**
   ```bash
   sudo apt update
   sudo apt install -y ros-humble-desktop
   ```

4. **Install colcon build tool:**
   ```bash
   sudo apt install -y python3-colcon-common-extensions
   ```

5. **Install ROS2 dependencies:**
   ```bash
   sudo apt install -y python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool build-essential
   ```

6. **Initialize rosdep:**
   ```bash
   sudo rosdep init
   rosdep update
   ```

7. **Source the ROS2 environment:**
   ```bash
   source /opt/ros/humble/setup.bash
   ```

8. **Permanently add ROS2 to your bash environment:**
   ```bash
   echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
   ```

### Verification

Test your ROS2 installation:
```bash
ros2 topic list
```
This should run without errors.

## Gazebo Installation

### Gazebo Classic (Gazebo 11)

Gazebo Classic is included with the ROS2 desktop installation, but you can install it separately if needed:

```bash
sudo apt install gazebo libgazebo-dev
```

### Gazebo Garden

For the newer Gazebo version:

1. **Add the Gazebo repository:**
   ```bash
   sudo curl -sSL http://get.gazebosim.org | sh
   ```

2. **Install Gazebo Garden:**
   ```bash
   sudo apt install gz-garden
   ```

## NVIDIA Isaac Sim Setup

NVIDIA Isaac Sim requires several prerequisites and has specific installation requirements.

### Prerequisites

1. **NVIDIA GPU with CUDA support:**
   - Compute Capability 6.0 or higher
   - At least 6GB of GPU memory (8GB+ recommended)
   - NVIDIA Driver 495.44 or later

2. **Install NVIDIA Container Toolkit:**
   ```bash
   curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg
   curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
   sudo apt update
   sudo apt install -y nvidia-container-toolkit
   sudo nvidia-ctk runtime configure --runtime=containerd
   sudo systemctl restart containerd
   ```

3. **Install Docker if not already installed:**
   ```bash
   sudo apt update
   sudo apt install -y docker.io
   sudo usermod -aG docker $USER
   # Log out and log back in for changes to take effect
   ```

### Isaac Sim Installation

Isaac Sim can be installed through NVIDIA Omniverse:

1. **Download and install NVIDIA Omniverse Launcher:**
   - Visit the NVIDIA Omniverse website
   - Download the Omniverse Launcher
   - Run the installer

2. **Launch Isaac Sim through Omniverse:**
   - Open Omniverse Launcher
   - Find Isaac Sim in the asset library
   - Install and launch

### Alternative: Isaac Sim Docker

For Docker-based installation:

```bash
docker pull nvcr.io/nvidia/isaac-sim:latest
```

Run Isaac Sim:
```bash
docker run --gpus all -it --rm \
  --network=host \
  --env "DISPLAY" \
  --env "QT_X11_NO_MITSHM=1" \
  --volume "/tmp/.X11-unix:/tmp/.X11-unix:rw" \
  --volume "/tmp/.docker.xauth:/tmp/.docker.xauth" \
  --device=/dev/dri:/dev/dri \
  --privileged \
  --name isaac_sim \
  nvcr.io/nvidia/isaac-sim:latest
```

## Python Environment Setup

### Using Virtual Environment (Recommended)

1. **Install Python development tools:**
   ```bash
   sudo apt install python3-pip python3-dev python3-venv
   ```

2. **Create a virtual environment:**
   ```bash
   python3 -m venv ~/isaac_venv
   source ~/isaac_venv/bin/activate
   ```

3. **Upgrade pip:**
   ```bash
   pip install --upgrade pip
   ```

### Required Python Packages

Install essential packages for the course:

```bash
# For general robotics development
pip install numpy scipy matplotlib

# For computer vision and image processing
pip install opencv-python opencv-contrib-python

# For deep learning and AI
pip install torch torchvision torchaudio
pip install transformers

# For ROS2 Python interfaces
pip install ros-numpy

# For visualization
pip install plotly

# For Isaac Sim (if using Python API)
pip install omniisaacgymenvs  # This is for the reinforcement learning environments
```

## Development Environment

### VS Code Setup

1. **Install VS Code:**
   ```bash
   sudo snap install code --classic
   ```

2. **Install recommended extensions for robotics development:**
   - ROS (for ROS/ROS2 support)
   - Python
   - C/C++
   - GitLens
   - Docker
   - YAML

3. **Configure ROS2 development:**
   - Install the ROS extension
   - Set the ROS distribution path: `Ctrl+Shift+P` → "ROS: Set ROS Workspace"
   - Select `/opt/ros/humble`

### Alternative Editors

If you prefer other editors:

#### Vim/Neovim
- Install the `ros.vim` plugin for ROS support
- Consider using `python-mode` for Python development

#### PyCharm
- Professional edition has ROS support
- Community edition works well for Python development

## Git and Version Control

### Git Installation
Git should already be installed, but if not:

```bash
sudo apt install git
```

### Configuration
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global core.editor "code --wait"  # Use VS Code as default editor for Git
```

## Additional Tools

### Build Tools

Install essential build tools:

```bash
sudo apt install build-essential cmake pkg-config
```

### Communication Protocols

Install tools for network communication:

```bash
sudo apt install net-tools iperf3
```

### System Monitoring

For monitoring system resources:

```bash
sudo apt install htop nethogs iotop
```

## Troubleshooting Common Issues

### ROS2 Permission Issues

If you encounter permission issues with ROS2:

```bash
# Add your user to the dialout group
sudo usermod -a -G dialout $USER
```

### Gazebo Not Starting

If Gazebo fails to start:

1. **Check graphics drivers:**
   ```bash
   nvidia-smi  # For NVIDIA
   glxinfo | grep "OpenGL renderer"  # Check OpenGL support
   ```

2. **Reset Gazebo configuration:**
   ```bash
   rm -rf ~/.gazebo
   ```

### Isaac Sim Performance

For better Isaac Sim performance:

1. **Ensure you have a compatible GPU:**
   ```bash
   nvidia-smi
   ```

2. **Verify DirectX and OpenGL support:**
   - Isaac Sim requires modern graphics drivers
   - Ensure Vulkan support if available

### Python Package Issues

If you encounter Python package conflicts:

1. **Use virtual environments:**
   ```bash
   python3 -m venv my_robotics_env
   source my_robotics_env/bin/activate
   ```

2. **Clear pip cache if needed:**
   ```bash
   pip cache purge
   ```

## Verification of Complete Setup

After completing all installations, verify your setup:

1. **Test ROS2:**
   ```bash
   ros2 run demo_nodes_cpp talker
   ```

2. **Test Gazebo:**
   ```bash
   gazebo
   ```

3. **Test Python environment:**
   ```bash
   python3 -c "import rclpy; print('ROS2 Python interface working')"
   python3 -c "import cv2; print('OpenCV working')"
   python3 -c "import torch; print('PyTorch working')"
   ```

## Next Steps

Once your environment is properly set up, proceed to Module 1 to begin learning ROS2 foundations. Make sure all tools are properly installed and working before starting the course content.

If you encounter any issues during setup, consult the troubleshooting section or seek help from the course community forums.