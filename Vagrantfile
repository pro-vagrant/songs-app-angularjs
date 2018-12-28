Vagrant.configure(2) do |config|
  config.vm.box = "apache-next-v0.1.0"
  config.vm.box_url = "https://s3-eu-west-1.amazonaws.com/pro-vagrant/apache-next-v0.1.0.box"
  config.vm.box_download_checksum_type = "sha256"
  config.vm.box_download_checksum = "30916e8d173f7735456d5bf96ab039ea523cf5d8687bc709b1f23d8b001646f0"
  config.vm.network :forwarded_port, guest: 80, host: 8800, host_ip: "127.0.0.1"
  config.vm.post_up_message = "The application is available at http://127.0.0.1:8800"
end
