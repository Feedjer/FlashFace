module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: [
        "git clone https://github.com/ali-vilab/FlashFace app",
      ]
    }
  }, {
    method: "script.start",
    params: {
      uri: "torch.js",
      params: {
        path: "app",
        venv: "env",
//        xformers: true
      }
    }
  }, {
    method: "shell.run",
    params: {
      venv: "env",
      path: "app",
      message: [
        "pip install -r requirements.txt"
      ]
    }
  },{
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
  },{
  method: "fs.link",
  params: {
    venv: "app/env"
  }
 },{
    method: "notify",
    params: {
      html: "Click the 'start' tab to get started!"
    }
  }]
}
