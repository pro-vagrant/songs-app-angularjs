Vagrant.configure(2) do |config|
  config.vm.box = "apache-v2.0.0"
  config.vm.box_url = "http://boxes.gajdaw.pl/apache/apache-v2.0.0.box"
  config.vm.box_download_checksum_type = "sha256"
  config.vm.box_download_checksum = "e1e5cfa60846f1e32904fb4291cc8407e3aadbd8bd8f3440dce862bdf8d05bda"
  config.vm.network :forwarded_port, guest: 80, host: 8800, host_ip: "127.0.0.1"
  config.vm.post_up_message = "The application is available at http://127.0.0.1:8800"
end
