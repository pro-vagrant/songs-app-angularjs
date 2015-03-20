Vagrant.configure(2) do |config|
  config.vm.box = "apache-v0.3.3"
  config.vm.box_url = "http://boxes.gajdaw.pl/apache/apache-v0.3.3.box"
  config.vm.box_download_checksum_type = "sha256"
  config.vm.box_download_checksum = "1e7c94c5b5ec152ca6c7fee68b830e7b07cca01b0b871f1f4da89c1408c568bb"
  config.vm.network :forwarded_port, guest: 80, host: 8800, host_ip: "127.0.0.1"
  config.vm.post_up_message = "The application is available at http://127.0.0.1:8800"
end
