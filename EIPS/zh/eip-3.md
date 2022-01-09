---
eip: 3
title: 新增 CALLDEPTH 操作码
author: Martin Holst Swende <martin@swende.se>
status: Withdrawn
type: Standards Track
category: Core
created: 2015-11-19
---

# 摘要

这是一个添加新操作码 `CALLDEPTH` 的建议。 `CALLDEPTH` 操作码将返回剩余的可用调用堆栈深度。

# 动机

调用堆栈限制了一个合约可以调用其他合约的深度。目前的限制是 `256`。如果一个合约调用另一个合约（通过 `CALL` 或 `CALLCODE`），如果已经达到调用堆栈深度限制，操作将失败。

这种行为使得合约有可能受到“调用堆栈攻击”[1]。在这种攻击中，攻击者首先创建一个合适的堆栈深度，例如通过递归调用。在这一步之后，攻击者调用目标合约。如果目标调用另一个合同，该调用将失败。如果没有正确地检查返回值以确定调用是否成功，那么结果可能是有害的。

例子：

1. 合约 `A` 希望被定期调用，并在每个块中向调用方支付 Ether。
2. 当合约 `A` 被调用时，它调用合约 `B` 和 `C`，这将消耗大量的 gas。调用之后，合约 `A` 将 Ether 支付给调用方。
3. 恶意用户 `X` 在调用 A 之前确保堆栈深度较浅。对 `B` 和 `C` 的调用都失败了，但 `X` 仍然可以获得奖励。

有两种方法可以防止这种情况：

1. 调用后检查返回值。
2. 通过实验检查调用堆栈深度。由 Piper Merriam 编写的[2]库可以解决这个问题。但这种方法的 gas 成本很高。


[1] 又称“浅栈攻击”和“栈攻击”。然而，准确地说，“堆栈（stack）”一词在 EVM 中有不同的含义，不能与“调用堆栈（call stack）”混淆。

[2] https://github.com/pipermerriam/ethereum-stack-depth-lib


# 规范

操作码 `CALLDEPTH` 应该返回剩余的调用堆栈深度。值 `0` 表示调用堆栈已耗尽，不能再进行调用。

# 基本原理

实际的调用堆栈深度以及调用堆栈深度限制在执行期间存在于 EVM 中，但在 EVM 中不可用。实现应该相当简单，并将提供一种廉价的方法来防止调用堆栈攻击。

# 实现

没有实现。