Songs for kids - AngularJS application
======================================

How to run the application?

Clone the repo:

    $ git clone https://github.com/pro-vagrant/songs-app-angularjs.git

Enter the directory:

    $ cd songs-app-angularjs

Boot VM:

    $ vagrant up

Start your web browser and visit:

    http://localhost:8800

## How to install the box manually?

Due to the Vagrant's bug https://github.com/mitchellh/vagrant/issues/5449
checksums are verified only when you use `$ vagrant box add` command.

You can install the box manually using the command shown below:

    vagrant box add \
        --name apache-v0.3.3 \
        --checksum-type sha256 \
        --checksum 1e7c94c5b5ec152ca6c7fee68b830e7b07cca01b0b871f1f4da89c1408c568bb \
        http://boxes.gajdaw.pl/apache/apache-v0.3.3.box

The above command verifies the checksum of a newly installed box.
