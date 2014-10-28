VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "apache-v0.1.0"
  config.vm.network :forwarded_port, guest: 8880, host: 8800
end
