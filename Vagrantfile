Vagrant.configure(2) do |config|
  config.vm.box = "apache-v1.0.0"
  config.vm.box_url = "http://boxes.gajdaw.pl/apache/apache-v1.0.0.box"
  config.vm.box_download_checksum_type = "sha256"
  config.vm.box_download_checksum = "091eb90af1bce5dd1dc936ed9db9ef65631e7428c29e60b395025a2d21cdc463"
  config.vm.network :forwarded_port, guest: 80, host: 8800, host_ip: "127.0.0.1"
  config.vm.post_up_message = "The application is available at http://127.0.0.1:8800"
end
