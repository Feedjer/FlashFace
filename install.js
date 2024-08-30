module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/ali-vilab/FlashFace app",
        ]
      }
    },
    // Delete this step if your project does not use torch
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",                // Edit this to customize the venv folder path
          path: "app",                // Edit this to customize the path to start the shell from
          // xformers: true   // uncomment this line if your project requires xformers
        }
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "pip install gradio devicetorch",
          "pip install -r requirements.txt",
          "pip install numpy==1.26.4"
        ]
      }
    },
    {
      method: "fs.download",
      params: {
        uri: "https://huggingface.co/shilongz/FlashFace-SD1.5/resolve/main/flashface.ckpt",
        dir: "app/cache"
      }
    },{
      method: "fs.download",
      params: {
        uri: "https://huggingface.co/shilongz/FlashFace-SD1.5/resolve/main/retinaface_resnet50.pth",
        dir: "app/cache"
      }
    },{
      method: "fs.download",
      params: {
        uri: "https://huggingface.co/shilongz/FlashFace-SD1.5/resolve/main/bpe_simple_vocab_16e6.txt.gz",
        dir: "app/cache"
      }
    },{
      method: "fs.download",
      params: {
        uri: "https://huggingface.co/shilongz/FlashFace-SD1.5/resolve/main/openai-clip-vit-large-14.pth",
        dir: "app/cache"
      }
    },{
      method: "fs.download",
      params: {
        uri: "https://huggingface.co/shilongz/FlashFace-SD1.5/resolve/main/sd-v1-vae.pth",
        dir: "app/cache"
      }
    }
  ]
}
