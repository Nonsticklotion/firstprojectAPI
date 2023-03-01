const createError = require("../utils/createError");
const validator = require("validator");

const {
  Case,
  CaseType,
  Cpu,
  CpuCooler,
  CpuSocket,
  Efficiency,
  GpuChipset,
  Manufacturer,
  MbChipset,
  MbFormfactor,
  Memory,
  MemoryType,
  Motherboard,
  PowerSupply,
  Product,
  Storage,
  StorageFormfactor,
  StorageType,
  VideoCard,
} = require("../models");

exports.getPart1 = async (req, res, next) => {
  try {
    let { table } = req.body;
    switch (table) {
      case "CaseType":
        const casetype = await CaseType.findAll();
        res.json({ casetype: casetype });
        break;
      case "CpuCooler":
        const cpucooler = await CpuCooler.findAll();
        res.json({ cpucooler: cpucooler });
        break;
      case "Efficiency":
        const efficiency = await Efficiency.findAll();
        res.json({ efficiency: efficiency });
        break;
      case "GpuChipset":
        const gpuchipset = await GpuChipset.findAll();
        res.json({ gpuchipset: gpuchipset });
        break;
      case "Manufacturer":
        const manufacturer = await Manufacturer.findAll();
        res.json({ manufacturer: manufacturer });
        break;
      case "MbChipset":
        const mbchipset = await MbChipset.findAll();
        res.json({ mbchipset: mbchipset });
        break;
      case "MbFormfactor":
        const mbformfactor = await MbFormfactor.findAll();
        res.json({ mbformfactor: mbformfactor });
        break;
      case "MemoryType":
        const memorytype = await MemoryType.findAll();
        res.json({ memorytype: memorytype });
        break;
      case "StorageFormfactor":
        const storageformfactor = await StorageFormfactor.findAll();
        res.json({ storageformfactor: storageformfactor });
        break;
      case "StorageType":
        const storagetype = await StorageType.findAll();
        res.json({ storagetype: storagetype });
        break;
      default:
        res.json("Invalid case");
    }
  } catch (err) {
    next(err);
  }
};

exports.getPart2 = async (req, res, next) => {
  try {
    const { table, extend1, extend2, extend3, extend4, extend5 } = req.body;
    switch (table) {
      case "Cpu":
        const includeOptions = [
          {
            model: Manufacturer,
            attributes: ["manufacName"],
            where: extend1 !== null ? { manufacName: extend1 } : {},
          },
          {
            model: CpuSocket,
            attributes: ["socketName"],
            where: extend2 !== null ? { socketName: extend2 } : {},
          },
        ];
        
        const cpu = await Cpu.findAll({
          include : includeOptions,
        });
        const product = await Product.findAll({

        })
        const result = 
        res.json({ cpu: cpu });
        break;
      case "Cpucooler":
        const cpucooler = await Cpucooler.findAll();
        res.json({ cpucooler: cpucooler });
        break;
      case "Motherboard":
        const motherboard = await Motherboard.findAll();
        res.json({ motherboard: motherboard });
        break;
      case "VideoCard":
        const videocard = await VideoCard.findAll();
        res.json({ videocard: videocard });
        break;
      case "Memory":
        const memory = await Memory.findAll();
        res.json({ memory: memory });
        break;
      case "Storage":
        const storage = await Storage.findAll();
        res.json({ storage: storage });
        break;
      case "Case":
        const Case = await Case.findAll();
        res.json({ Case: Case });
        break;
      case "PowerSupply":
        const powersupply = await PowerSupply.findAll();
        res.json({ powersupply: powersupply });
        break;
      default:
        res.json("Something wrong");
    }
  } catch (err) {
    next(err);
  }
};
