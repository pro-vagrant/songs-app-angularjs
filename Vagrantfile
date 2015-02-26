VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "gajdaw/apache"
  config.vm.network :forwarded_port, guest: 80, host: 8800, host_ip: "127.0.0.1"
end
