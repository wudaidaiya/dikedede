<template>
  <div>
    <div class="box1">
      运营工单：
      <el-input
        class="inputs"
        placeholder="请输入内容"
        v-model="input"
        clearable
      >
      </el-input>
      工单状态：
      <el-input
        class="inputs"
        placeholder="请输入内容"
        v-model="input"
        clearable
      >
      </el-input>
      <el-button size="medium" type="primary" icon="el-icon-search"
        >查询</el-button
      >
    </div>
    <div class="box1">
      <el-button size="medium" type="primary" icon="el-icon-search"
        >新建</el-button
      >
      <el-button size="medium" type="primary">工单配置</el-button>
    </div>
    <el-table :data="tableData" :border="false" style="width: 100%">
      <el-table-column  prop="createType" label="序号" width="80">
      </el-table-column>
      <el-table-column prop="innerCode" label="工单编号" width="160">
      </el-table-column>
      <el-table-column prop="taskCode" label="设备编号" width="160">
      </el-table-column>
      <el-table-column prop="taskType.typeName" label="工单类型" width="160">
      </el-table-column>
      <el-table-column prop="taskType.typeId" label="工单方式" width="160">
      </el-table-column>
      <el-table-column prop="taskType.type" label="工单状态" width="170">
      </el-table-column>
      <el-table-column prop="userName" label="运营人员" width="170">
      </el-table-column>
      <el-table-column prop="createTime" label="创建日期" width="170">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template>
          <el-button type="text" size="small">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getListSearch } from '@/api/work'
export default {
  data() {
    return {
      tableData: [],
    }
  },
  created() {
    this.getListSearch()
  },

  methods: {
    async getListSearch() {
      const res = await getListSearch()
      this.tableData = res.data.currentPageRecords
      console.log(res.data.currentPageRecords)
    },
  },
}
</script>

<style lang="less" scoped>
.inputs {
  width: 200px;
}
.box1 {
  margin: 50px 20px;
}
</style>
