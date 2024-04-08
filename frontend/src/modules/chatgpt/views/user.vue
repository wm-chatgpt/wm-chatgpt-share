<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<cl-flex1 />
			<!-- 关键字搜索 -->
			<cl-search-key />
		</cl-row>

		<cl-row>
			<!-- 数据表格 -->
			<cl-table ref="Table">
				<template #column-userToken="{ scope }">
					<span @click="touchCopy(scope.row.userToken)">{{ scope.row.userToken }}</span>
				</template>
			</cl-table>
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</cl-row>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" name="chatgpt-user" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";
import { v4 as uuidv4 } from "uuid";
import useClipboard from "vue-clipboard3";
const { service } = useCool();
import { ElMessage } from 'element-plus'

function touchCopy(userToken: string) {
	console.log(111);
	// 调用
	copy(userToken);
}

// 使用插件
const { toClipboard } = useClipboard();
const copy = async (msg: string) => {
	try {
		// 复制
		await toClipboard(msg);
		// 复制成功
		ElMessage.success("复制成功");
	} catch (e) {
		console.log(e);
		// 复制失败
	}
};

const shortcuts = [
	{
		text: "7天后",
		value: () => {
			const date = new Date();
			date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
			return date;
		}
	},
	{
		text: "30天后",
		value: () => {
			const date = new Date();
			date.setTime(date.getTime() + 3600 * 1000 * 24 * 30);
			return date;
		}
	},
	{
		text: "90天后",
		value: () => {
			const date = new Date();
			date.setTime(date.getTime() + 3600 * 1000 * 24 * 90);
			return date;
		}
	},
	{
		text: "180天后",
		value: () => {
			const date = new Date();
			date.setTime(date.getTime() + 3600 * 1000 * 24 * 180);
			return date;
		}
	},
	{
		text: "365天后",
		value: () => {
			const date = new Date();
			date.setTime(date.getTime() + 3600 * 1000 * 24 * 365);
			return date;
		}
	}
];
// cl-upsert 配置
const Upsert = useUpsert({
	items: [
		{ label: "UserToken", prop: "userToken", required: true, component: { name: "el-input" } },
		{
			label: "过期时间",
			prop: "expireTime",
			component: {
				name: "el-date-picker",
				props: { type: "datetime", valueFormat: "YYYY-MM-DD HH:mm:ss", shortcuts }
			},
			required: true
		},
		{
			label: "PLUS",
			prop: "isPlus",
			component: {
				name: "el-switch",
				props: {
					activeValue: 1,
					inactiveValue: 0
				}
			}
		},
		{
			label: "等级",
			prop: "level",
			component: {
				name: "el-select",
				options: [
					{
						label: "基础会员",
						value: "1"
					},
					{
						label: "尊享会员",
						value: "2"
					}
				]
			},
			required: true
		},
		{
			label: "备注",
			prop: "remark",
			component: { name: "el-input", props: { type: "textarea", rows: 4 } }
		}
	],
	onOpened(data) {
		// 自动生成uuid 作为userToken
		if (!data.userToken) {
			data.userToken = uuidv4();
		}
	}
});

// cl-table 配置
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "id", prop: "id", sortable: true, width: 50 },
		{ label: "创建时间", prop: "createTime", sortable: true },
		{ label: "更新时间", prop: "updateTime", sortable: true },
		{ label: "UserToken", prop: "userToken", sortable: true, minWidth: 250 },
		{ label: "过期时间", prop: "expireTime", sortable: true },
		{ label: "PLUS", prop: "isPlus", component: { name: "cl-switch" }, sortable: true },
		{
			label: "等级",
			prop: "level",
			sortable: true,
			dict: [
				{ label: "普通会员", value: 1, type: "primary" },
				{ label: "尊享会员", value: 2, type: "success" }
			]
		},
		{ label: "备注", prop: "remark", showOverflowTooltip: true, sortable: true, width: 120 },
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.chatgpt.user
	},
	(app) => {
		app.refresh();
	}
);
</script>
