

function addCpu (extend1,
    extend2,
    extend3,
    extend4,
    extend5,
    description,
    picture,
    amountLeft,
    price,) 
    try{
        const findmanfac = await Manufacturer.findOne({
            where: { manufacName: extend3 },
          });
          const findsocket = await CpuSocket.findOne({
            where: { socketName: extend4 },
          });
          let manufacturer, socket;
  
          if (findmanfac) {
            manufacturer = findmanfac;
          } else {
            manufacturer = await Manufacturer.create({
              manufacName: extend3,
            });
          }
  
          if (findsocket) {
            socket = findsocket;
          } else {
            socket = await CpuSocket.create({ socketName: extend4 });
          }
          const cpu = await Cpu.create({
            seriesName: extend1,
            tdp: extend2,
            manufacid: manufacturer.id,
            socket_name_id: socket.id,
          });
          const product = await Product.create({
            cpu_id: cpu.id,
            description: description,
            picture: picture,
            amountLeft: amountLeft,
            price: price,
          });
  
          res.json({
            id: cpu.id,
            seriesName: cpu.seriesName,
            tdp: cpu.tdp,
            manufacturer: {
              id: manufacturer.id,
              name: manufacturer.id,
            },
            socket: {
              id: socket.id,
              name: socket.name,
            },
            product: {
              cpu_id: cpu.id,
              description: description,
              picture: picture,
              amountLeft: amountLeft,
              price: price,
            },
          });
    } catch (err) {
        next(err);
      }

module.exports = addCpu;